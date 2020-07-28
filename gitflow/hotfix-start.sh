#!/bin/bash

current_dir="$(dirname "$0")"
source "$current_dir/get-next-version.sh"

# branch hotfix from master
git checkout master
sem_ver_type="patch"
new_version=$(get_next_version $sem_ver_type)
git checkout -b "hotfix/${new_version}"
# bump version in package.json
npm version $sem_ver_type
# git commit
git commit --amend -m "Hotfix version ${new_version}"

git push origin HEAD
