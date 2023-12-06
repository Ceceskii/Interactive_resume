## Create a Cloud Resume with AWS
#### This project was inspired by IT project design class as a part of IT project design class, senior students are required to build resume, so this project has combined building a resume with Amazon Web Services. The project will leverage various [S3](https://s3.console.aws.amazon.com/s3/home?region=us-west-2), [Route 53](https://us-east-1.console.aws.amazon.com/route53/v2/home?region=us-west-2#Dashboard), [CloudFront](https://us-east-1.console.aws.amazon.com/cloudfront/v4/home?region=us-west-2#/distributions), and [ACM](https://us-west-2.console.aws.amazon.com/acm/home?region=us-west-2#/welcome) to ensure scalability, security, and reliability.

### Build a Static Website on S3
* Create [HTML](https://github.com/Ceceskii/web_resume/blob/main/index.html), [CSS](https://github.com/Ceceskii/web_resume/blob/main/styles.css), and an interactive [JavaScript](https://github.com/Ceceskii/web_resume/blob/main/scripts.js).
* Upload files to an [S3 Bucket](https://s3.console.aws.amazon.com/s3/buckets/celine-resume.com?region=us-west-2&tab=objects) created.
* Configure [S3](https://s3.console.aws.amazon.com/s3/buckets/celine-resume.com?region=us-west-2&tab=properties) for a Static website with public access.

### Make it work with a custom domain name using Route 53
* Register a domain name with AWS via [Route 53](https://us-east-1.console.aws.amazon.com/route53/v2/home?region=us-west-2#Dashboard) or any other website.
* Update Domain Name records to point to the S3 website endpoint.

### Incorporate CloudFront and SSL/HTTPS
* Set up SSL/HTTPS with [ACM](https://us-east-1.console.aws.amazon.com/acm/home?region=us-east-1#/welcome). When request the certificate, be sure to select us-east-1 region.
* Create a [CloudFront](https://us-east-1.console.aws.amazon.com/cloudfront/v4/home?region=us-west-2#/distributions) Distribution.
