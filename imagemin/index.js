
/*import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
*/
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	const files = await imagemin(["/images/**.*"], {
		destination: "../minimg",
		plugins: [
			imageminJpegtran({ quality: 80 }),
			imageminPngquant({ quality: [0.6, 0.8] })
			]
	});
	console.log(files);
})();