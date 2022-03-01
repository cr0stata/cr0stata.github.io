---
layout: single
permalink: /projects/
# title: "Data Science Projects"
author_profile: true
---

<!-- link for all embedded things: https://mmistakes.github.io/minimal-mistakes/docs/helpers/ -->

# All Projects

### Fast Neural Style Transfer
*October 2021* | *Python*
{% include figure image_path="/images/Projects18.png" caption="
Demo app on Hugging Face Spaces for neural style transfer using the pretrained Arbitrary ImageStylization model from TensorFlow Hub. This image is an example of the results.<br/><br/>

Access the app [here](https://huggingface.co/spaces/luca-martial/neural-style-transfer). Code can be viewed on [GitHub](https://github.com/luca-martial/entity-normalization-engine)"%}

### Building an Entity Normalization Engine
*August 2021* | *Python*
{% include figure image_path="/images/Projects17.png" caption="
The goal of this project was to create an entity normalization engine. The input to this engine is short strings that could encompass the following entities: company names, company addresses, serial numbers, physical goods and locations. The output is a timestamped CSV file of the grouped entities.<br/><br/>

The approach consisted of the following steps:<br/>
1. Retrieve incoming string, feed to Facebook's [bart-large-mnli](https://huggingface.co/facebook/bart-large-mnli) NLI-based Zero Shot Text Classification model using HuggingFace's zero-shot classification pipeline. Assign class with highest probability to string.<br/>
2. Feed string to that class-specific entity normalization engine. Each class-specific engine has its unique text pre-processing pipeline and uses TF-IDF with N-Grams to calculate cosine similarities for all strings in that class.<br/>
3. Entities are then grouped based on a minimum threshold of cosine similarity and we output a CSV with grouped entities and their group-representatives.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/entity-normalization-engine)"%}

### ElonBot: The Discord AI Bot for Chatting and Moderation
*June 2021* | *Python*
{% include figure image_path="/images/Projects16.gif" caption="
The goal of this project was to create an AI replica of Elon Musk that can chat and moderate user interactions on Discord. Its conversation abilities come from Microsoft's [DialoGPT conversational model](https://huggingface.co/microsoft/DialoGPT-medium) that I fine-tuned on conversation transcripts of Elon Musk's appearance on the Joe Rogan Experience, the Lex Fridman Podcast and a Clubhouse interview. Its moderation abilities come from Unitary's [Multilingual Toxic Comment Classifier](https://huggingface.co/unitary/multilingual-toxic-xlm-roberta) allowing it to assess the toxicity of a message, warn users when they're using foul language and kick them out of the server after 3 strikes.<br/><br/>

The data used are webscraped transcripts from Elon's interviews on [Clubhouse](https://zamesin.me/clubhouse-elon-musk-interview/) and the [Lex Fridman podcast](https://lexfridman.com/wordpress/wp-content/uploads/2019/11/elon_musk_lex_fridman_2_transcript.pdf), as well as a [ready-to-use dataset](https://www.kaggle.com/christianlillelund/joe-rogan-experience-1169-elon-musk) retrieved from Kaggle of Elon's interview on the Joe Rogan Experience. <br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/elon-bot)"%}

### Tabular Playground Series - Mar 2021 (Kaggle)
*March 2021* | *Python*
{% include figure image_path="/images/Projects15.png" caption="
The goal of this project was to build machine learning models to predict a binary target in a tabular dataset, as part of the March 2021 version of the monthly [Tabular Playground Series Kaggle competition](https://www.kaggle.com/c/tabular-playground-series-mar-2021/overview). I experimented with decision trees, random forests, neural networks and ensembling.<br/><br/>

The dataset used for this competition is synthetic but based on a real dataset and generated using a CTGAN. The original dataset deals with predicting the amount of an insurance claim. Although the features are anonymized, they have properties relating to real-world features. My best submission scored a AUC-ROC of 0.88675 on the private leaderboard, placing me in the top 700.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/fastai-v2-projects/tree/main/march-tabular-challenge)"%}

### Rainforest Connection Species Audio Detection
*February 2021* | *Python*
{% include figure image_path="/images/Projects14.png" caption="
Rainforest Connection (RFCx) created the world’s first scalable, real-time monitoring system for protecting and studying remote ecosystems. Unlike visual-based tracking systems like drones or satellites, RFCx relies on acoustic sensors that monitor the ecosystem soundscape at selected locations year round. RFCx technology has advanced to support a comprehensive biodiversity monitoring program that allows local partners to measure progress of wildlife restoration and recovery through principles of adaptive management.<br/><br/>

The goal of this project was to build a machine learning model to automate the detection of bird and frog species in tropical soundscape recordings, as part of a [Kaggle competition](https://www.kaggle.com/c/rfcx-species-audio-detection/overview). The models had to be created with limited, acoustically complex training data. My best submission scored a label-weighted label-ranking average precision of 0.71 on the private leaderboard.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/fastai-v2-projects/tree/main/rainforest-audio)"%}


### Real or Not? NLP with Disaster Tweets
*August 2020* | *Python*
{% include figure image_path="/images/Projects13.png" caption="
The goal of this project was to build a machine learning model that predicts which Tweets are about real disasters and which ones aren’t. I had access to a dataset of 10,000 tweets that were hand classified. This project was part of a Kaggle competition where I scored a 79.5% accuracy.<br/><br/>

**Acknowledgments:** this dataset was created by the company figure-eight and originally shared on their ‘Data For Everyone’ website [here](https://appen.com/resources/datasets/).<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/fastai-projects/tree/master/nlp-tweets)"%}


<!-- ### Web App: Classifying Endangered Birds Species
*July 2020* | *Python, JS, CSS, HTML*
{% include figure image_path="/images/Projects12.png" caption="
This web app was built to analyze images of endangered waterbird species present throughout the Prek Toal Reserve in Cambodia and determine which species is present in the image. This classifier has the potential to bring support to NGOs such as [Osmose](http://osmosetonlesap.net/wp/index.php/en/home/) which ensure the protection of waterbird colonies throughout the reproductive cycle.<br/><br/>
The web app described here is available at [classify-my-bird.onrender.com/](https://classify-my-bird-jrrp.onrender.com/). Test it out with pictures of birds from the Prek Toal Reserve!<br/><br/>
Model accuracy isn't great and evidently, this is a toy project – so please don't take the output seriously.<br/><br/>
Code can be viewed on [GitHub](https://github.com/luca-martial/osmose-app)"%} -->


### Classifying Endangered Birds From the Prek Toal Reserve
*July 2020* | *Python*
{% include figure image_path="/images/Projects11.png" caption="
The goal of this project was to build an image classifier that identifies different endangered waterbird species present throughout the Prek Toal Reserve in Cambodia. This classifier has the potential to bring support to NGOs such as [Osmose](http://osmosetonlesap.net/wp/index.php/en/home/) which ensure the protection of waterbird colonies throughout the reproductive cycle. Data was collected using Google Images.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/fastai-projects/tree/master/osmose-birds)"%}


<!-- ### Web App: Identifying Improper Mask Wear
*July 2020* | *Python, JS, CSS, HTML*
{% include figure image_path="/images/Projects10.png" caption="
This web app was built to analyze images and identify whether a person in an image is wearing their mask properly or improperly. The web app described here is available at [to-mask-or-not-to-mask.onrender.com](https://to-mask-or-not-to-mask-h54i.onrender.com). Test it out with pictures of you wearing a mask!<br/><br/>
Model accuracy isn't great and evidently, this is a toy project – so please don't take the output seriously.<br/><br/>
Code can be viewed on [GitHub](https://github.com/luca-martial/mask-wear-app)"%} -->


### Identifying Improper Mask Wear
*July 2020* | *Python*
{% include figure image_path="/images/mask_wear.png" caption="
The goal of this project was to build an image classifier that identifies whether a person is wearing their mask properly or imporperly. Data was collected using Google Images.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/fastai-projects/tree/master/mask-wear)"%}


### Montreal Temperature Spiral (1872-2019)
*December 2019* | *Python*
{% include video id="MbvvOTVyU-I" provider="youtube"%}{% include figure caption="The goal of this project was to create an animated spiral of Montreal's variation in temperature from 1872 to 2019.<br/><br/>

Background: [Ed Hawkins](http://www.met.reading.ac.uk/~ed/home/index.php), a climate scientist, unveiled [an animated visualization](http://www.climate-lab-book.ac.uk/spirals/) in 2017 which captivated the world. This visualization showed the deviations of the global average temperature from 1850 to 2017. It was reshared millions of times over Twitter and Facebook and a version of it was even shown at the opening ceremony for the Rio Olympics.<br/><br/>

This animation was created with the help of [an article on Dataquest.io](https://www.dataquest.io/blog/climate-temperature-spirals-python/) written by Srini Kadamati.<br/><br/>

Historical weather data was retrieved from [Environment Canada's website](https://climate.weather.gc.ca/). Recordings from the Montreal McGill Station (Dr. Penfield Street/Redpath Street) provided monthly weather data from 1872 to 1993 while recordings from the Montreal McTavish Station (McTavish Street/Dr. Penfield Street), just 700 meters away, provided daily weather data from 1994 to 2019. Combining data from both sources may constitute a source of error, but with the unavailability of continuous weather recordings from 1872 to 2019 from a single station, there appears to be no alternative solution.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/Montreal-Temperature-Spiral)"%}

### Analyzing a Star Wars Survey
*July 2019* | *Python*
{% include figure image_path="/images/starwars.png" caption="
While waiting for Star Wars: The Force Awakens to come out, the team at [FiveThirtyEight](https://fivethirtyeight.com/) became interested in answering some questions about Star Wars fans. In particular, they wondered: does the rest of America realize that “The Empire Strikes Back” is clearly the best of the bunch?<br/><br/>

The team needed to collect data addressing this question. To do this, they surveyed Star Wars fans using SurveyMonkey. They received 835 total responses, which are downloadable from their [GitHub repo](https://github.com/fivethirtyeight/data/tree/master/star-wars-survey).<br/><br/>

The goal of this project was to conduct a rapid cleaning, exploration and analysis of the data.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/Star-Wars-Survey)"%}


### Analyzing NYC High School Data
*June 2019* | *Python*
{% include figure image_path="/images/sat.png" caption="
New York City has published the following data on student [SAT](https://en.wikipedia.org/wiki/SAT) scores by high school, along with additional demographic data sets:

- SAT scores by school - SAT scores for each high school in New York City
- School attendance - Attendance information for each school in New York City
- Class size - Information on class size for each school
- AP test results - Advanced Placement (AP) exam results for each high school (passing an optional AP exam in a particular subject can earn a student college credit in that subject)
- Graduation outcomes - The percentage of students who graduated, and other outcome information
- Demographics - Demographic information for each school
- School survey - Surveys of parents, teachers, and students at each school

New York City has a significant immigrant population and is very diverse, so comparing demographic factors such as race, income and gender with SAT scores can be an interesting way to explore whether the SAT is a fair test. This was the goal of this quick analysis.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/Analyzing-NYC-High-School-Data)"%}


### Analyzing Employee Exit Surveys
*June 2019* | *Python*
{% include figure image_path="/images/employee.png" caption="
In this project, I worked with exit surveys from employees of the [Department of Education, Training and Employment](https://en.wikipedia.org/wiki/Department_of_Education_and_Training_(Queensland)) (DETE) and the Technical and Further Education (TAFE) institute in Queensland, Australia.<br/><br/>

I played the role of a data analyst and pretended my stakeholders want to know the following:

- Are employees who only worked for the institutes for a short period of time resigning due to some kind of dissatisfaction? What about employees who have been there longer?
- Did more employees in the DETE or TAFE institute end their employment because they were dissatisfied in some way?
- How many people in each age group resigned due to some kind of dissatisfaction? Are younger employees resigning due to some kind of dissatisfaction? What about older employees?

I had to combine the results for *both* surveys to answer these questions. However, although both used the same survey template, one of them customized some of the answers. I therefore aimed to perform lots of data cleaning before getting started analyzing.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/Analyzing-Employee-Exit-Surveys)"%}


### Job Outcomes of College Students Between 2010 and 2012 in the U.S.
*May 2019* | *Python*
{% include figure image_path="/images/college.png" caption="
In this project, I worked with a dataset on the job outcomes of students who graduated from college between 2010 and 2012. The original data on job outcomes was released by [American Community Survey](https://www.census.gov/programs-surveys/acs/), which conducts surveys and aggregates the data. [FiveThirtyEight](https://fivethirtyeight.com/) cleaned the dataset and released it on their [Github repo](https://github.com/fivethirtyeight/data/tree/master/college-majors).<br/><br/>

This project was done to showcase how using the pandas plotting functionality along with the Jupyter notebook interface allows us to explore data quickly using visualizations.<br/><br/>

Using visualizations, I explored the following questions from the dataset:

- Do students in more popular majors make more money?
- How many majors are predominantly male? Predominantly female?
- Which categories of majors have the most students?

Code can be viewed on [GitHub](https://github.com/luca-martial/Earnings-Based-on-College-Majors)"%}


### Exploring Hacker News Posts
*April 2019* | *Python*
{% include figure image_path="/images/hacker-news.png" caption="
In this project, I worked with a data set of submissions to popular technology site [Hacker News](https://news.ycombinator.com/).<br/><br/>

Hacker News is a site started by the startup incubator [Y Combinator](https://www.ycombinator.com/), where user-submitted stories (known as 'posts') are voted and commented upon, similar to Reddit.<br/><br/>

I was specifically interested in posts whose titles begin with either 'Ask HN' or 'Show HN'. Users submit 'Ask HN' posts to ask the Hacker News community a specific question. Likewise, users submit 'Show HN' posts to show the Hacker News community a project, product, or just generally something interesting.<br/><br/>

I compared these two types of posts to determine the following:

- Do Ask HN or Show HN posts receive more comments on average?
- Do posts created at a certain time receive more comments on average?
- Do Ask HN or Show HN posts receive more points on average?
- Do posts created at a certain time receive more points on average?

Code can be viewed on [GitHub](https://github.com/luca-martial/Hacker-News-Posts-Analysis)"%}


### eBay Car Sales Analysis
*March 2019* | *Python*
{% include figure image_path="/images/ebay_car.png" caption="
In this project, I worked with a dataset of used cars from eBay Kleinanzeigen, a [classifieds](https://en.wikipedia.org/wiki/Classified_advertising) section of the German eBay website.<br/><br/>

The dataset was originally [scraped](https://en.wikipedia.org/wiki/Web_scraping) and uploaded to [Kaggle](https://www.kaggle.com/orgesleka/used-cars-database/data). A few modifications were made by [Dataquest](https://www.dataquest.io/) to the original dataset that was uploaded to Kaggle:

- The dataset was trimmed down to 50,000 data points from the full dataset
- The dataset was dirtied a bit to more closely resemble what could be expected from a scraped dataset (the version uploaded to Kaggle was cleaned to be easier to work with)

This was done to allow data scientists to put into use their data cleaning skills. The aim of this project was to clean the data and analyze the included used car listings.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/Exploring-Ebay-Car-Sales-Data)"%}


### Profitable App Profiles for the App Store and Google Play Markets
*February 2019* | *Python*
{% include figure image_path="/images/app.png" caption="
Context: A company builds Android and iOS mobile apps that are free to download and install. Their main source of revenue consists of in-app ads. This means that the more users they get, the more people will be seeing the ads, the more revenue they will be able to generate.<br/><br/>

Goal: My goal was to help the company's developers understand what kinds of apps are likely to attract more users on Google Play and the App Store.<br/><br/>

Code can be viewed on [GitHub](https://github.com/luca-martial/Popular-Apps-Project)"%}

