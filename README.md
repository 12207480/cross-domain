### ����ļ�Сdemo
����һ�����ڿ���ļ�demo���ϣ���demo���������Լ�����Ⲣ�����Ӧ��ע�ͣ������Լ򵥵�demo���ܿ���ķ������ʺ�����ѧϰ����ķ���������demo����ʹ�û���nodeJs��Web�������Express����Ҫһ���nodeJS��֪ʶ��ע���������ϸ˵����
> �����������û�ἰ�Ŀ��򷽷�����ӭPR��лл��

### Set Up
���л���
- node.js ȫ�ְ�װ
- npm ȫ�ְ�װ

���в���
1. cross-domainĿ¼��npm install��������Ŀ���������
2. �����Ӧ��demoĿ¼����node serverRes.js  �����¿�һ��dos����   ��node serverReq.js
2. �����ڶ�Ӧ��demoĿ¼�£�dos��������`run.bat`��ֱ��һ���������Ģ٢ڢ�

### һ��CROS����

��Ŀ��������֮��
- ��������ҳ���ַ�� http://localhost:3000
- �鿴���ݣ� http://localhost:3001

### ����JSONP����

��Ŀ����������
> ����ҳ�棺 http://localhost:3000

> ��Ӧҳ��Ϊ http://localhost:3001

### ����location.hash����
�� http://localhost:3000/a.html ʹ��js��̬����һ�����ص�iframe������src����Ϊ' http://localhost:3001/c.html#getdata '����c.html�ж�hashֵ�Ƿ�Ϊ'#getdata'�����Ϊ'#getdata'��������һ�����ص�iframe����src����ָ��' http://localhost:3000/b.html '����Ϊa.html��b.htmlͬԴ�����Կ�����b.html�����޸�a.html��hashֵ������a.html�Ϳ���ͨ����ȡ�����hashֵ�õ�����
> ��Ŀ���е�ַ�� http://localhost:3000/a.html

### �ġ�postMessage����
����html5����API�������ڲ�ͬ����iframe֮��Ŀ���

> ��Ŀ���е�ַ�� http://localhost:3000

### �塢������ô���proxy����
��ΪJSͬԴ������������İ�ȫ���ԣ�������������ͻ��˲��ܿ�����ʣ����������˵���HTTP�ӿ�ֻ��ʹ��HTTPЭ�飬����ִ��JS�ű�������ҪͬԴ���ԣ�Ҳ��û�п�Խ���⡣

- demo1
ͨ��ʹ��http-proxy-middleware������ú�˵Ĵ����� http://localhost:3000 ����

- demo2
��ʹ�ò�����ô���ֱ��ʹ��httpģ�鷢������ �� http://localhost:3000 ����

### ����window.name����
�� http://localhost:3000/a.html ʹ��js��̬����һ�����ص�iframe������src����Ϊ' http://localhost:3001/c.html '�������iframe������֮����������src����ΪͬԴ�ĵ�ַ' http://localhost:3000/b.html '��b.html��һ���յ�html�ļ���


> ��Ŀ���е�ַ�� http://localhost:3000/a.html


> ���ڸ�����....
