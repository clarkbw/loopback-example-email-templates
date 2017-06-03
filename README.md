# loopback-example-email-templates

[![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/loopback-example-email-templates.svg)](https://greenkeeper.io/)


```
git clone https://github.com/clarkbw/loopback-example-email-templates.git
cd loopback-example-email-templates
npm install
bower install
slc run
```

In this example, we create an email template application that shares CSS between the client side and the email templates on the server side.  Built with [LoopBack](http://loopback.io) on the server side.

- [Prerequisites](#prerequisites)
- [Procedure](#procedure)
  - [1. Create the application](#1-create-the-application)
  - [2. Customize the client bootstrap styles](#2-customize-the-client-bootstrap-styles)
  - [3. Customize the email verify templates](#3-customize-the-email-verify-templates)
  - [4. Run the Application](#4-run-the-application)

##Prerequisites

###Tutorials

- [Getting started with LoopBack][1]
- [Tutorial series - Step 1][2]

###Knowledge

- [Bootstrap][3]
- [Bower][4]
- [node-email-templates][5]

##Procedure

###1. Create the application

####Application information

- Name: `loopback-example-email-templates`
- Directory to contain the project: `loopback-example-email-templates`

```
slc loopback loopback-example-email-templates
... # follow the prompts
cd loopback-example-email-templates
```

###2. Customize the client bootstrap styles

Open up the [`less` directory](/client/public/less) to edit the bootstrap imported styles.

You can remove imports you aren't using or custom variables, look in the bootstrap `variables.less` file for others.

###3. Customize the email verify templates

Open up the [`template/verify` directory](/template/verify) and edit the files you see in there.

* `html.ejs` holds the HTML that will used to render the email.
* `text.ejs` holds the Plain Text that will render to the fallback text version of the email.
* `style.less` imports the global client styles and allows you to make custom changes just for emails


###4. Run the application

From the project root, enter `slc run` and browse to [`localhost:3000`][localhost] to view the application.

---

- [All tutorials][all-tutorials]

[all-tutorials]: https://github.com/strongloop/loopback-example
[localhost]: http://localhost:3000

[1]: https://github.com/strongloop/loopback-getting-started
[2]: https://github.com/strongloop/loopback-example#step-1
[3]: http://getbootstrap.com/
[4]: http://bower.io/
[5]: https://github.com/niftylettuce/node-email-templates/
