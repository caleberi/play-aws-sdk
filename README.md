# Play-aws-sdk

<img src="./banner.png" style="padding: 0 1%;display:inline-block;">

A play around with amazon software development kit . This documentation is divided into  notes based on the service I am working with  on AWS.

## Notes for Amazon Elastic Service

```Amazon Elastic Container Service (Amazon ECS)``` is a highly scalable, fast container management service that makes it ```easy to run, stop, and manage``` containers on a ```cluster``` .
In this context, a service is a configuration that enables you to run and maintain a specified number of tasks simultaneously in a cluster. You can run your tasks and services on a serverless infrastructure that is managed by AWS Fargate.

- Amazon ECS enables you to launch and stop your container-based applications by using simple API calls. You can also retrieve the state of your cluster from a centralized service and have access to many familiar Amazon EC2 features.

- Amazon ECS can be used to create a consistent build and deployment experience, to manage and scale batch and Extract-Transform-Load (ETL) workloads, and to build sophisticated application architectures on a microservices model. 
  
Features of Amazon ECS

- Amazon ECS is a regional service that simplifies running containers in a highly available manner across multiple Availability Zones within a Region .
  
![Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/images/overview-fargate.png)

Container and Images

To deploy applications on Amazon ECS, your application components must be architected to run in ```containers```. A container is a standardized unit of software development that contains everything that your software application needs to run, including relevant code, runtime, system tools, and system libraries. Containers are created from a read-only template called ```an image```.
Images are typically built from ```a Dockerfile```, which is a plaintext file that specifies all of the components that are included in the container. After being built, these images are stored in ```a registry``` where they then can be downloaded and run on your cluster.

![registry](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/images/overview-containers.png)

Task definitions

To prepare your application to run on Amazon ECS, you must create a task definition. The task definition is a text file (in JSON format) that describes one or more containers (up to a maximum of ten) that form your application. The task definition can be thought of as a blueprint for your application. It specifies various parameters for your application. For example, these parameters can be used to indicate which containers should be used, which ports should be opened for your application, and what data volumes should be used with the containers in the task. The specific parameters available for your task definition depend on the needs of your specific application.

```json
{
    "family": "webserver",
    "containerDefinitions": [
        {
            "name": "web",
            "image": "nginx",
            "memory": "100",
            "cpu": "99"
        },
    ],
    "requiresCompatibilities": [
        "FARGATE"
    ],
    "networkMode": "awsvpc",
    "memory": "512",
    "cpu": "256",
}
```

Tasks and scheduling
A task is the instantiation of a task definition within a cluster. After you have created a task definition for your application within Amazon ECS, you can specify the number of tasks to run on your cluster.

The Amazon ECS task scheduler is responsible for placing tasks within your cluster. There are several different scheduling options available. For example, you can define a service that runs and maintains a specified number of tasks simultaneously.

![ECS scheduler](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/images/overview-service-fargate.png)

Clusters

An Amazon ECS cluster is a logical grouping of tasks or services. You can register one or more Amazon EC2 instances (also referred to as container instances) with your cluster to run tasks on them. Or, you can use the serverless infrastructure that Fargate provides to run tasks. When your tasks are run on Fargate, your cluster resources are also managed by Fargate.

Container agent

The container agent runs on each container instance within an Amazon ECS cluster. The agent sends information about the resource's current running tasks and resource utilization to Amazon ECS. It starts and stops tasks whenever it receives a request from Amazon ECS.

![Container agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/images/overview-containeragent-fargate.png)

Related services
Amazon ECS can be used along with the following AWS services:

- AWS Identity and Access Management
- Amazon EC2 Auto Scaling
- Elastic Load Balancing
- Amazon Elastic Container Registry
- AWS CloudFormation
  
  