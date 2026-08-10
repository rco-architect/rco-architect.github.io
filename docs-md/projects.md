




GitHub Pages allows you to serve a static website from **two main folder locations** within your repository.

### The Two Folder Options Explained
1. **`/(root)` Option:**
    GitHub Pages looks for `index.html` directly at the top level of your repository folder (`rco-architect.github.io/index.html`).
  
2. **`/docs` Option:**
    GitHub Pages ignores the root folder and looks for `index.html` inside a folder named `docs` (`rco-architect.github.io/docs/index.html`).
    
### How to Configure the Location in GitHub
You configure this setting directly in your repository's web settings on GitHub:

1. Open your repository on GitHub: `[https://github.com/rco-architect/rco-architect.github.io](https://github.com/rco-architect/rco-architect.github.io)`
  
    
2. Click on **Settings** (top navigation tab).
3. Select **Pages** from the left-hand menu.
4. Under **Build and deployment**:
    - **Source:** Select **Deploy from a branch**.
    - **Branch:** Select **`main`**.
        
    - **Folder Dropdown:** Choose either **`/(root)`** or **`/docs`**.
5. Click **Save**.
    
### Why People Choose One Over the Other
- **Use `/(root)` when:** Your entire repository exists solely to host your website (like your personal portfolio repository).
    
- **Use `/docs` when:** Your repository contains source code or software (like an open-source library or app) and you want to keep the documentation/website isolated inside a single `docs/` folder without cluttering the root project files.


Configuration 1: Serving from `/(root)`

rco-architect.github.io/
├── index.html                   # Entry point (github.io/)
├── README.md
├── .gitignore
│
├── docs-md/                     # Custom Markdown files
│   ├── index.md
│   ├── roadmap.md
│   └── project1.md
│
├── public/                      # Static media
│   └── favicon.ico
│
└── src/                         # Site source code
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    └── pages/
        ├── about.html
        ├── roadmap.html
        └── projects.html




Configuration 2: Serving from `/docs`

rco-architect.github.io/
├── .gitignore
├── README.md
├── src_backend/                 # Project code (Python, C++, etc.)
│   └── main.py
│
└── docs/                              # ALL website code lives inside here
    ├── index.html               # Entry point (github.io/)
    ├── docs-md/                 # Custom Markdown files
    │   ├── index.md
    │   ├── roadmap.md
    │   └── project1.md
    ├── public/
    │   └── favicon.ico
    └── src/
        ├── css/
        │   └── style.css
        ├── js/
        │   └── app.js
        └── pages/
            ├── about.html
            ├── roadmap.html
            └── projects.html








``` 
RCO-ARCHITECT.GITHUB.IO
├── index.html
├── docs-md/
├── public/
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    └── pages/


    

rco-architect.github.io/
├── index.html                   # Root entry point
├── README.md
├── .gitignore
│
├── public/                      # Static assets
│   ├── favicon.ico
│   └── images/
│
├── docs-md/                     # Folder for your Markdown documentation files
│   ├── index.md
│   ├── roadmap.md
│   ├── project1.md
│   └── project2.md
│
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    └── pages/
        ├── about.html
        ├── roadmap.html
        └── projects.ht
``` Tree



How  to create domains for projects like  https://Prod_Turist.github.io/

On GitHub, your account domain (`[https://username.github.io/](https://username.github.io/)`) is strictly tied to your GitHub username (`rco-architect`).

  

However, you can easily host separate websites for different projects in two ways:

  

### Method 1: Sub-directory Sites Under Your Account (Most Common)

You can create a separate GitHub repository for your project (e.g., named `Prod_Turist`). GitHub Pages will host it at a sub-path under your main domain:

  

$$\text{URL: } \mathtt{[https://rco-architect.github.io/Prod](https://rco-architect.github.io/Prod)\_Turist/}$$

#### How to set it up:

1. Create a **new public repository** on GitHub named `Prod_Turist`.
    
      
    
2. Add your website files (`index.html`, `style.css`, etc.) to this new repository.
    
      
    
3. Go to the new repository's **Settings** $\rightarrow$ **Pages**.
    
      
    
4. Set the source to **Deploy from a branch** $\rightarrow$ **`main`** branch $\rightarrow$ **Save**.
    
      
    

Your main portfolio site will stay at `[https://rco-architect.github.io/](https://rco-architect.github.io/)`, and your tourist project site will live independently at `[https://rco-architect.github.io/Prod_Turist/](https://rco-architect.github.io/Prod_Turist/)`.

  

### Method 2: Get the Exact Domain `[https://Prod-Turist.github.io/](https://Prod-Turist.github.io/)`

If you want `Prod_Turist` (or similar) as the main subdomain before `.github.io`, you have two options:

  

1. **Create a GitHub Organization:**
    
      
    - On GitHub, click your profile picture $\rightarrow$ **Your organizations** $\rightarrow$ **New organization**.
        
          
        
    - Name the organization `Prod-Turist` (or similar available name).
        
          
        
    - Create a repository named `Prod-Turist.github.io` inside that organization.
        
          
        
    - Enable GitHub Pages on it. The site will be published at `[https://Prod-Turist.github.io/](https://Prod-Turist.github.io/)`.
        
          
        
2. **Use a Custom Domain (Optional):**
    
      
    - If you buy a domain name (like `prodturist.com`), you can link it to any repository in your GitHub account through **Settings > Pages > Custom domain**.
        

### Comparison Summary

|**Approach**|**Resulting URL**|**Setup Required**|
|---|---|---|
|**New Repo in Current Account**|`[https://rco-architect.github.io/Prod_Turist/](https://rco-architect.github.io/Prod_Turist/)`|New repository in your account|
|**GitHub Organization**|`[https://Prod-Turist.github.io/](https://Prod-Turist.github.io/)`|Create a GitHub Organization|
|**Custom Domain**|`[https://prodturist.com](https://prodturist.com)`|Purchased domain + DNS config|
