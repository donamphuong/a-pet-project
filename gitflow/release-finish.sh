#!/bin/bash

current_dir="$(dirname "$0")"
source "$current_dir/get-next-version.sh"

# 1. Merges the release branch back into 'master'
git checkout master
# 2. Merge made by recursive
sem_ver_type="minor"
new_version=$(get_next_version $sem_ver_type)
git merge "release/${new_version}" -m "Merging version ${new_version} into master\n Finishing release ${new_version}"
git push
# 3. Tags the release
git push origin "v${new_version}"
# 4. Back-merges the release into 'develop'
git checkout develop
git merge "release/${new_version}" -m "Merging version ${new_version} into develop\n Finishing release ${new_version}"
git push
# 5. Removes release branch
git branch -D "release/${new_version}"
