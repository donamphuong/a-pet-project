#!/bin/bash

current_dir="$(dirname "$0")"
source "$current_dir/get-next-version.sh"

sem_ver_type="minor"
new_version=$(get_next_version $sem_ver_type)

# 1. Merges the release branch back into 'master'
git checkout master
# 2. Merge made by recursive
git merge --no-ff "release/${new_version}"
# 3. Tags the release
git push origin "v${new_version}"
# 4. Back-merges the release into 'develop'
git checkout develop
git merge --no-ff "release/${new_version}"
# 5. Removes release branch
git branch -D "release/${new_version}"
