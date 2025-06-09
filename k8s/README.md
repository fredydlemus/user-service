# Kubernetes Deployment

This directory contains Kubernetes manifests for deploying the User Service.

## Prerequisites

1. A Kubernetes cluster
2. `kubectl` configured to communicate with your cluster
3. Access to GitHub Container Registry
4. A PostgreSQL database (or your chosen database) instance

## Configuration

Before deploying, you need to:

1. Create the GitHub Container Registry secret:
   ```bash
   kubectl create secret docker-registry github-registry \
     --docker-server=ghcr.io \
     --docker-username=YOUR_GITHUB_USERNAME \
     --docker-password=YOUR_GITHUB_TOKEN
   ```

2. Create the database secret:
   ```bash
   kubectl create secret generic user-service-secrets \
     --from-literal=database-url='your-database-url'
   ```

## Deployment

Deploy the application using:

```bash
kubectl apply -f k8s/
```

## Verification

Check the deployment status:
```bash
kubectl get pods -l app=user-service
kubectl get service user-service
```
