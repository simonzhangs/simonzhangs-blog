#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送（songben）
# curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=www.songbenblog.com&token=o9roFQBF2efJgalK"

# 百度链接推送 （github pages）
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://simonzhangs.github.io&token=o9roFQBF2efJgalK"

rm -rf urls.txt # 删除文件
