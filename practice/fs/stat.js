/**
 * Created by xin on 2016/12/5.
 */
var fs = require('fs');

console.log('准备打开文件！');

fs.stat('./practice/txt/output.txt', function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功！');

    // 检测文件类型
    console.log('是否为文件？'+ stats.isFile());
    console.log('是否为目录？'+ status.isDirectory());
});