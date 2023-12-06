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

### STEP-BY-STEP GUIDE (after Create [HTML](https://github.com/Ceceskii/web_resume/blob/main/index.html), [CSS](https://github.com/Ceceskii/web_resume/blob/main/styles.css), and an interactive [JavaScript](https://github.com/Ceceskii/web_resume/blob/main/scripts.js)):
### 1. Create an S3 Bucket for Your Website:
* Open the AWS Management Console and navigate to the S3 service.
* Create a new S3 bucket with a unique name. Ensure that the bucket name matches the domain name you intend to use.
### 2. Configure the S3 Bucket for Website Hosting:
* Inside your S3 bucket, go to the "Properties" tab.
* Enable static website hosting and specify the index document (e.g., index.html).
### 3. Upload Your Website Files to S3:
* Upload your resume website files (HTML, CSS, JS, images, headshot, etc.) to the S3 bucket. 
### 4. Configure S3 Bucket Policy:
* Set up a bucket policy allowing public read access to your objects. This is necessary for your website to be accessible.
### 5. Obtain an SSL/TLS Certificate using ACM:
* Open the ACM service in the AWS Management Console.
* Request a new certificate for your domain (e.g., www.yourdomain.com).
### 6. Create a CloudFront Distribution:
* Open the CloudFront service in the AWS Management Console.
* Create a new distribution.
* In the distribution settings:
    * Set the origin domain name to your S3 bucket endpoint.
    * Set the default root object to your index.html.
    * Choose your ACM certificate for SSL/TLS.
### 7. Update DNS Records with Route 53:
* Open the Route 53 service in the AWS Management Console.
* If you don't have a hosted zone, create one for your domain.
* Create a new record set for your domain (e.g., www.yourdomain.com) and set the Alias target to your CloudFront distribution.
### 8. Wait for DNS Propagation:
* It may take some time for DNS changes to propagate. Be patient and check your domain after some time.
### 9. Test Your Website:
* Visit your website using the domain name (e.g., www.yourdomain.com) and ensure that it's working correctly.

#### Your static website for your interactive resume should now be hosted on AWS using S3, CloudFront, Route 53, and ACM. Make sure to regularly update your resume and files on the S3 bucket as needed.
