FROM ansibleplaybookbundle/apb-base

LABEL "com.redhat.apb.spec"=\
"LS0tCnZlcnNpb246IDEuMApuYW1lOiBraWJhbmEtYXBiCmRlc2NyaXB0aW9uOiBBUEIgdG8gZGVw\
bG95IEtpYmFuYSBPU1MgNi4xLjIKYmluZGFibGU6IEZhbHNlCmFzeW5jOiBvcHRpb25hbAptZXRh\
ZGF0YToKICBkaXNwbGF5TmFtZTogIktpYmFuYSAoQVBCKSIKICBkZXBlbmRlbmNpZXM6IFsnZG9j\
a2VyLmVsYXN0aWMuY28va2liYW5hL2tpYmFuYS1vc3M6Ni4xLjInXQogIGltYWdlVXJsOiBodHRw\
czovL3d3dy5lbGFzdGljLmNvL2Fzc2V0cy9ibHQyODJhZTI0MjBlMzJmYzM4L2ljb24ta2liYW5h\
LWJiLnN2ZwogIGRvY3VtZW50YXRpb25Vcmw6IGh0dHBzOi8vd3d3LmVsYXN0aWMuY28vZ3VpZGUv\
ZW4va2liYW5hLzYuMS9pbmRleC5odG1sCiAgcHJvdmlkZXJEaXNwbGF5TmFtZTogIlJlZCBIYXQs\
IEluYy4iCnRhZ3M6CiAgLSBraWJhbmEKICAtIGVsYXN0aWNzZWFyY2gKcGxhbnM6CiAgLSBuYW1l\
OiBlcGhlbWVyYWwKICAgIGRlc2NyaXB0aW9uOiBUaGlzIHBsYW4gZGVwbG95cyBLaWJhbmEgd2l0\
aG91dCBwZXJzaXN0ZW50IGNhY2hlCiAgICBmcmVlOiBUcnVlCiAgICBtZXRhZGF0YToKICAgICAg\
ZGlzcGxheU5hbWU6IEVwaGVtZXJhbCBpbnN0YWxsYXRpb24KICAgIGRlZmF1bHQ6IFRydWUKICAg\
IHBhcmFtZXRlcnM6CiAgICAtIG5hbWU6IEFQUExJQ0FUSU9OX05BTUUKICAgICAgdHlwZTogc3Ry\
aW5nCiAgICAgIGRlZmF1bHQ6IGtpYmFuYQogICAgICBkZXNjcmlwdGlvbjogS2liYW5hIGFwcGxp\
Y2F0aW9uCiAgICAgIHRpdGxlOiBBcHBsaWNhdGlvbiBuYW1lCiAgICAgIHJlcXVpcmVkOiB0cnVl\
CiAgICAtIG5hbWU6IEtJQkFOQV9NRU1PUllfTElNSVQKICAgICAgdHlwZTogc3RyaW5nCiAgICAg\
IGRlZmF1bHQ6IDI1Nk1pCiAgICAgIGRlc2NyaXB0aW9uOiBNZW1vcnkgbGltaXQgZm9yIEtpYmFu\
YSBjb250YWluZXIKICAgICAgdGl0bGU6IE1lbW9yeSBsaW1pdAogICAgICByZXF1aXJlZDogdHJ1\
ZQogIC0gbmFtZTogcGVyc2lzdGVudAogICAgZGVzY3JpcHRpb246IFRoaXMgcGxhbiBkZXBsb3lz\
IEtpYmFuYSB3aXRoIHBlcnNpc3RlbnQgY2FjaGUKICAgIGZyZWU6IFRydWUKICAgIG1ldGFkYXRh\
OgogICAgICBkaXNwbGF5TmFtZTogUGVyc2lzdGVudCBpbnN0YWxsYXRpb24KICAgIHBhcmFtZXRl\
cnM6CiAgICAtIG5hbWU6IEFQUExJQ0FUSU9OX05BTUUKICAgICAgdHlwZTogc3RyaW5nCiAgICAg\
IGRlZmF1bHQ6IGtpYmFuYQogICAgICBkZXNjcmlwdGlvbjogS2liYW5hIGFwcGxpY2F0aW9uCiAg\
ICAgIHRpdGxlOiBBcHBsaWNhdGlvbiBuYW1lCiAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAtIG5h\
bWU6IEtJQkFOQV9NRU1PUllfTElNSVQKICAgICAgdHlwZTogc3RyaW5nCiAgICAgIGRlZmF1bHQ6\
IDI1Nk1pCiAgICAgIGRlc2NyaXB0aW9uOiBNZW1vcnkgbGltaXQgZm9yIEtpYmFuYSBjb250YWlu\
ZXIKICAgICAgdGl0bGU6IE1lbW9yeSBsaW1pdAogICAgICByZXF1aXJlZDogdHJ1ZQogICAgLSBu\
YW1lOiBLSUJBTkFfUFZDX1NJWkUKICAgICAgdHlwZTogc3RyaW5nCiAgICAgIGRlZmF1bHQ6IDIw\
ME1pCiAgICAgIGRlc2NyaXB0aW9uOiBLaWJhbmEgc3RvcmFnZSBzaXplCiAgICAgIHRpdGxlOiBL\
aWJhbmEgc3RvcmFnZQogICAgICByZXF1aXJlZDogdHJ1ZQo="

COPY playbooks /opt/apb/actions
COPY roles /opt/ansible/roles
RUN chmod -R g=u /opt/{ansible,apb}
USER apb
