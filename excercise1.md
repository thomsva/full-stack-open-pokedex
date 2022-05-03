## Exercise 11.1

The hypothetical application is a web application written in Java and with users in many differernt countries. 

For a linting solution there is a commonly used tool called [Checkstyle](https://github.com/checkstyle/checkstyle) for checking Java source code. There are Checkstyle integrations for most common IDS:s and Checkstyle can also be made a part of an automated CI pipeline. For example there are premade GitHub actions for running Checkstyle found on the GitHub Marketplace for Actions. Checkstyle can also be run as a part of the build while using a build tool. 

Examples of Java build tools are Gradle, Ant and Maven. A build tool is used to compile the source code into an executable and conveniently the build tools are commonly used to run unit tests and integration tests as a stage in the build process. 

For CI, some alternatives to Jenkins or GitHub Actions could be Travis, CircleCI or the GitLab CI/CD tool. 

The question weather to deploy the application in a cloud based solution or going with a self hosted alternative, it comes down to several different factors. If the users of the application are spread out all over the world, they would have a better quality of service if the applications was hosted by a provider, who has servers in all parts of the world. If the owner of the application is large multinational company, they might have sufficient infrastucture themselves. In this case choosing between the alternatives would be a matter of cost or stategic choice. Most of the times economies of scale should make using a cloud based service very efficient. But economical efficiency is not always the main concideration. Many times companies value their data very highly and it may be seen as a smaller risk to keep everything in their own hands even at a higher cost for similar performance and reliablility. 
