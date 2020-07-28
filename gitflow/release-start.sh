#!/bin/bash

current_dir="$(dirname "$0")"
source "$current_dir/get-next-version.sh"

# run git flow release start
git checkout develop
sem_ver_type="minor"
new_version=$(get_next_version $sem_ver_type)
git checkout -b "release/${new_version}"
# bump version in package.json
npm version $sem_ver_type
# git commit
git commit --amend -m "Releasing new version ${new_version}"

git push origin HEAD
