### ����ļ�Сdemo
����һ�����ڿ���ļ�demo���ϣ���demo���������Լ�����Ⲣ�����Ӧ��ע�ͣ������Լ򵥵�demo���ܿ���ķ������ʺ�����ѧϰ����ķ�����
> �����������û�ἰ�Ŀ��򷽷�����ӭPR��лл��

### Set Up
���л���
- node.js ȫ�ְ�װ
- npm ȫ�ְ�װ

���в���
1. cross-domain-demoĿ¼��npm install��������Ŀ���������
2. �����Ӧ��demoĿ¼

### һ��CROS����
cros-demoĿ¼��
1. node serverRes.js
2. ���¿�һ��dos����
3. node serverReq.js

��Ŀ��������֮��
- ��������ҳ���ַ�� http://localhost:3000/
- �鿴���ݣ� http://localhost:3001/

### ����JSONP����
 - ����ֱ����jsonp-demoĿ¼�µ�dos����`����run.bat`��ֱ��һ����ɡ�

 - Ҳ���Ը�ԭ���Ĳ���һ����
��jsonp-demoĿ¼�¢�node serverRes.js  �����¿�һ��dos����   ��node serverReq.js

��Ŀ����������
- ����ҳ�棺 http://localhost:3002/
- ��Ӧҳ��Ϊ http://localhost:3003/

### ����postMessage����
����html5����API�������ڲ�ͬ����iframe֮��Ŀ���

> ��Ŀ���е�ַ�� http://localhost:3004/

### �ġ�������ô���proxy����
��ΪJSͬԴ������������İ�ȫ���ԣ�������������ͻ��˲��ܿ�����ʣ����������˵���HTTP�ӿ�ֻ��ʹ��HTTPЭ�飬����ִ��JS�ű�������ҪͬԴ���ԣ�Ҳ��û�п�Խ���⡣

- demo1
ͨ��ʹ��http-proxy-middleware������ú�˵Ĵ����� http://localhost:3006/ ����

- demo2
��ʹ�ò�����ô���ֱ��ʹ��httpģ�鷢������ �� http://localhost:3008/ ����

### window.name����
�� http://localhost:4001/a.html ʹ��js��̬����һ�����ص�iframe������src����Ϊ'http://localhost:4002/c.html'�������iframe������֮����������src����ΪͬԴ�ĵ�ַ'http://localhost:4001/b.html'��b.html��һ���յ�html�ļ���


> ��Ŀ���е�ַ�� http://localhost:4001/a.html


> ���ڸ�����....
