# Elasticsearch APB

This [Ansible Playbook Bundle](https://github.com/ansibleplaybookbundle/ansible-playbook-bundle) deploys Elasticsearch 6.1.2 with the elasticsearch-cloud-kubernetes plugin for discovery. The deployment is done through StatefulSet.

Two plans have been defined:
* **Ephemeral** where there won't be any persistence and the Elascticsearch data will be lost upon restarts
* **Persistent** where PVCs will be created for each instance of Elasticsearch

## Configuration

* **CLUSTER_SIZE**: Number of Elasticsearch instances that will be deployed. Default `1`
* **APPLICATION_NAME**: Name of the Elasticsearch cluster that will give name also to all the objects deployed. Default `elasticsearch`
* **ES_MEMORY_LIMIT**: Memory limits to be set to the `elasticsearch` container. The half will be assigned to the Elasticsearch heap. Default `512Mi`
* **ES_PVC_SIZE**: Size of each Persistent Volume Claim that will be defined. Default `1Gi` (Only for the persistent plan)

## Known issues

The elasticsearch-cloud-kubernetes plugin requires access to the project's endpoints. A RoleBinding should do that during provisioning.
Currently the RoleBinding for the `elasticsearch` ServiceAccount is not working and has to be done manually after deployment.

```
$ oc adm policy add-role-to-user view -z elasticsearch
```
After that pods need to be deleted so that changes take effect.
```
$ oc delete pods -l app=elasticsearch
```
