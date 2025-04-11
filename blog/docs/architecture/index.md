# Architecture Overview

The Internal Developer Platform (IDP) is built using several key components and follows a specific architecture to enable self-service infrastructure provisioning for developers.

## Core Components

![Architecture Diagram](/architecture-diagram.png)

### Control Plane

- **Azure Kubernetes Service (AKS)**: Serves as the control plane for the entire platform
- **Crossplane**: Kubernetes-based infrastructure provider that connects to cloud APIs
- **Custom Resource Definitions (CRDs)**: Define the infrastructure abstractions available to developers
- **Compositions**: Map simplified developer requests to actual cloud resources

### GitOps Workflow

- **Git Repository**: Source of truth for infrastructure requests
- **Continuous Integration**: Validates changes to resource requests
- **Continuous Delivery**: Applies validated changes to the platform
- **ArgoCD/Flux**: Synchronizes Git state with the cluster state

## Key Interactions

1. Developers commit YAML files describing their infrastructure needs
2. GitOps controller detects changes and applies them to the Kubernetes API
3. Crossplane translates these requests into Azure API calls
4. Azure provisions the requested resources
5. Connection information is made available to developers

## Security Considerations

- **Workload Identity**: Used for secure authentication with Azure
- **RBAC**: Controls who can request which resources
- **Secrets Management**: Securely stores and provides access to credentials

## Implementation Details

For specific implementation details, check out:
- [AKS Control Plane](/architecture/aks-control-plane)
- [Resource Abstractions](/architecture/resource-abstractions)
- [GitOps Workflow](/architecture/gitops-workflow)
