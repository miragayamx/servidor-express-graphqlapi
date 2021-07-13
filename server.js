const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const fServerOn = require('./fServerOn');

const clusterMode = process.env.CLUSTER_MODE === 'true';

if (clusterMode) {
	if (cluster.isMaster) {
		for (let i = 0; i < numCPUs; i++) {
			cluster.fork();
		}
		cluster.on('exit', (worker, code, signal) => {
			console.log(`Worker ${worker.process.pid} died`);
		});
	} else {
		console.log('Running server cluster!!!');
		fServerOn();
	}
} else {
	fServerOn();
}
