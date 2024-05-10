# 使用官方的nginx镜像作为基础
FROM nginx:alpine

# 将你的网页复制到镜像中的正确位置
COPY . /usr/share/nginx/html