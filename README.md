# Automated Server Deployment on Azure Using ARM Templates

## 📌 Project Overview

This project demonstrates Infrastructure as Code (IaC) by deploying a complete web server environment on Microsoft Azure using an Azure Resource Manager (ARM) template.

The deployment automatically provisions networking resources, creates an Ubuntu Linux Virtual Machine, installs Nginx and Git, clones a static website from GitHub, and serves it using Nginx without requiring manual server configuration.

---

# 🚀 Objectives

* Provision Azure infrastructure using ARM Templates
* Create an Ubuntu Linux Virtual Machine
* Configure networking components automatically
* Install and configure Nginx
* Clone website source code from GitHub
* Deploy the website to `/var/www/html`
* Make the application accessible through a Public IP

---

# 🏗️ Architecture

```
Internet
    │
    ▼
Public IP Address
    │
    ▼
Network Security Group
    │
    ▼
Network Interface
    │
    ▼
Ubuntu Linux Virtual Machine
    │
    ├── apt-get update
    ├── apt-get upgrade -y
    ├── Install Git
    ├── Install Nginx
    ├── Clone GitHub Repository
    ├── Copy Website Files
    └── Restart Nginx
    │
    ▼
Hosted Static Website
```

---

# 📁 Resources Created

The ARM template provisions the following Azure resources:

* Virtual Machine (Ubuntu Linux)
* Virtual Network (VNet)
* Subnet
* Network Interface (NIC)
* Network Security Group (NSG)
* Static Public IP Address
* VM Custom Script Extension

---

# ⚙️ Automated Server Configuration

After the VM is created, the Custom Script Extension automatically executes:

```bash
apt-get update
apt-get upgrade -y
apt-get install -y nginx git

systemctl enable nginx
systemctl start nginx

rm -rf /var/www/html/*

git clone https://github.com/gowthamsaikadali/myntra-clone.git /tmp/myntra-clone

cp -r /tmp/myntra-clone/. /var/www/html/

chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

systemctl restart nginx
```

---

# 🌐 Website Repository

The application source code is deployed from:

```
https://github.com/gowthamsaikadali/myntra-clone.git
```

---

# 🛠️ Azure Portal Deployment Process

## Step 1: Sign in to Azure Portal

* Open https://portal.azure.com
* Sign in with your Azure account.

## Step 2: Create or Select a Resource Group

* In the search bar, type **Resource Groups**.
* Click **Create** (or choose an existing resource group).
* Select your subscription.
* Enter a resource group name.
* Choose the region.
* Click **Review + Create**, then **Create**.

## Step 3: Open Custom Deployment

* In the Azure Portal search bar, type **Deploy a custom template**.
* Select **Deploy a custom template** from the results.

## Step 4: Build Your Own Template in the Editor

* Click **Build your own template in the editor**.
* Remove the sample template.
* Paste the contents of your ARM template (`azuredeploy.json`).
* Click **Save**.

## Step 5: Provide Template Parameters

Fill in the required values:

| Parameter      | Example                  |
| -------------- | ------------------------ |
| VM Name        | `linux-web-vm`           |
| Admin Username | `azureuser`              |
| Admin Password | `YourStrongPassword123!` |

The template will automatically create the required networking resources and VM.

## Step 6: Review and Deploy

* Verify the subscription and resource group.
* Accept the terms if prompted.
* Click **Review + Create**.
* After validation succeeds, click **Create**.

## Step 7: Wait for Deployment

Azure will provision:

* Public IP
* Network Security Group
* Virtual Network
* Subnet
* Network Interface
* Ubuntu Virtual Machine
* Custom Script Extension

The Custom Script Extension then:

* Updates packages
* Installs Nginx and Git
* Downloads the website from GitHub
* Deploys the files to `/var/www/html`
* Restarts Nginx

## Step 8: Retrieve the Public IP

After deployment:

1. Open the deployed Resource Group.
2. Select the **Public IP Address** resource or the **Virtual Machine**.
3. Copy the assigned Public IP address.

## Step 9: Access the Website

Open a web browser and navigate to:

```
http://<PUBLIC_IP>
```

Example:

```
http://20.204.xxx.xxx
```

If deployment completed successfully, your cloned website should be displayed.

---

# 🔓 Network Security Rules

| Port | Protocol | Purpose          |
| ---- | -------- | ---------------- |
| 22   | TCP      | SSH access       |
| 80   | TCP      | HTTP web traffic |

---

# 📂 Project Structure

```
project/
│
├── azuredeploy.json
├── README.md
└── (optional) parameter files
```

---

# ✅ Deployment Outcome

Once deployment finishes successfully:

* Ubuntu VM is provisioned.
* Nginx is installed and enabled.
* Git is installed.
* The website is cloned from GitHub.
* Existing Nginx content is replaced.
* Website files are served from `/var/www/html`.
* The application is accessible using the VM's Public IP address.

---

# 🔮 Possible Enhancements

* Add HTTPS using Azure Application Gateway or a reverse proxy.
* Use SSH public key authentication instead of passwords.
* Parameterize the Git repository URL and branch.
* Automate domain name configuration.
* Integrate CI/CD to redeploy on source code changes.
* Add Azure Monitor and Log Analytics for observability.

---

# 👤 Author

**Kadali Gowtham Sai**
**Role:** Multi Cloud | DevSecOps Engineer

---

# 📄 License

This project is intended for educational, demonstration, and portfolio purposes. Feel free to adapt and extend it for your own use.
