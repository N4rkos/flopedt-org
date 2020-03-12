dblaunch:
	pg_ctl -D /usr/local/var/postgres start

server:
	php bin/console server:run

encore:
	npm run watch

clear:
	php bin/console cache:clear
