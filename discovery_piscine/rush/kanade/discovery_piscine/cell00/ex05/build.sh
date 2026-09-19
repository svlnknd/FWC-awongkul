if [ $# -eq 0 ]; then
	echo "no args"
else

for a in "$@"; do
	mkdir ex"$a"
	done
fi
