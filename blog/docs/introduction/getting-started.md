# Getting Started

This guide will help you get up and running with the Internal Developer Platform (IDP).

## Prerequisites

Before you begin, ensure you have the following:

- Azure subscription with contributor access
- Git installed on your local machine
- kubectl command-line tool
- Azure CLI (az) installed and configured

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/devplatform-2.git
cd devplatform-2
```

### 2. Deploy the Platform

The platform can be deployed using our automated scripts:

```bash
cd terraform
./deploy-platform.sh
```

This script will:
- Create the necessary Azure resources
- Deploy AKS cluster
- Install Crossplane and providers
- Configure GitOps controllers
- Set up necessary RBAC

### 3. Verify Installation

Check that all components are running properly:

```bash
kubectl get pods -n crossplane-system
kubectl get providers
kubectl get xrds
```

### 4. Request Your First Resource

To request infrastructure through the platform:

1. Fork the resources repository
2. Create a new file in your namespace, e.g., `my-resources/database.yaml`:

```yaml
apiVersion: idp.example.com/v1alpha1
kind: PostgreSQLInstance
metadata:
  name: my-first-database
  namespace: my-team
spec:
  size: small
  version: "13"
  highAvailability: false
```

3. Commit and push your changes
4. Create a pull request
5. Once merged, the platform will provision your resource

### 5. Access Your Resources

Resource connection details will be available as Kubernetes secrets:

```bash
kubectl get secret my-first-database-conn -n my-team -o yaml
```

## Next Steps

- Explore available [Resource Types](/guide/resource-types)
- Learn about [GitOps Workflow](/architecture/gitops-workflow)
- Understand [Resource Abstractions](/architecture/resource-abstractions)

## Getting Help

If you encounter any issues, please:
1. Check the [Troubleshooting](/guide/troubleshooting) guide
2. Open an issue in the GitHub repository
3. Contact the platform team on Slack at #idp-support
