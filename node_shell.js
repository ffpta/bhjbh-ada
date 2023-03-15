const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'66ce1085-6bf9-4deb-89ec-1d55673f2635'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
