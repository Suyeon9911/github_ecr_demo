FROM nginx:latest                           
LABEL name="demo"                           

COPY ./website/fpworld/public/index.html /usr/share/nginx/html/index.html   

EXPOSE 80                                            

CMD ["nginx", "-g", "daemon off;"]