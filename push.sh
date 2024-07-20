# Find all files recursively
find . -type f -print0 | while IFS= read -r -d $'\0' file; do
  # Check if file ends with .pack
    if [[ $file == *.pack ]]; then
        # Use Git LFS to push that specific file
        git lfs track "$file"
    fi
  # Add each file to git
  git add "$file"
  # Commit changes with a message
  git commit -m "update"
  # Push changes to remote repository
  git push
done