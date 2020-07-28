#!/bin/bash

function get_next_version {
  # to generate a release branch
  current_version="$(node -p "require('./package.json').version")"

  if [[ ${current_version} =~ ([0-9]+\.[0-9]+\.[0-9]+)$ ]]; then
      # set comma as delimiter
      IFS='.'

      # split string by . character
      read -a versionarr <<< "$current_version"

      if [ "$1" = "patch" ]; then
        # bump version using patch
        versionarr[2]=$(expr ${versionarr[2]} + 1)
      elif [ "$1" = "minor" ]; then
        # bump version using minor
        versionarr[1]=$(expr ${versionarr[1]} + 1)
        versionarr[2]="0"
      elif [ "$1" = "major" ]; then
         # bump version using major
        versionarr[0]=$(expr ${versionarr[0]} + 1)
        versionarr[1]="0"
        versionarr[2]="0"
      else
        echo "Error! Invalid version bumping method"
        exit 125
      fi

      new_version="${versionarr[*]}"
      echo "${new_version}"
  else
      echo "Invalid date"
      exit 125
  fi
}

