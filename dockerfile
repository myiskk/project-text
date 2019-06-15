FROM private-registry.sohucs.com/domeos-pub/node:9-alpine
COPY . /opt/hybridapp/mptcfe-mobile-sohu-webapp-article
WORKDIR /opt/hybridapp/mptcfe-mobile-sohu-webapp-article
ENV PATH=${PATH}:/opt/apps/node/bin

RUN npm config set registry http://10.10.74.103:4873 
&& npm install axios 
&& npm install fs 
&& cd ./dist && tar -cf articletmp.tar articletmp 
&& curl -F 'file=@./articletmp.tar' -F 'decompress=true' -F 'bucketName=sohu-media' -F 'key=hybridapp/' -F 'expire=86400' 10.16.11.11:8081 
&& npm run publish
