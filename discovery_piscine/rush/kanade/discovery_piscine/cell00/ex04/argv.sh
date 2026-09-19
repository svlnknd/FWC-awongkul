if [ $# -eq 0 ]; then
	echo "no args"
elif [ $# -gt 3 ]; then
	echo "more than 3 args"
else
	for a in "$@"; do
		echo "$a"
	done
fi
