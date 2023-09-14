import removeMD from "markdown-to-text";

export default function Main(id) {
  const post = posts[id] || notFound;
  post.plain = removeMD(post.desc);
  return post;
}

export function listData(num) {
  const out = [];
  for (let i = 0; i < num; i++) {
    const post = posts[i];
    post.link = "/blog/" + i;
    post.plain = removeMD(post.desc);
    out.push(post);
  }
  return out;
}

const notFound = {
  title: "Page not found!",
  desc: "The page you were looking for was not found!",
};

const posts = {
  0: {
    title: "Bundelkhand Water Crisis",
    desc: `Bundelkhand and many parts of India is facing huge scarcity of water. Due to this the health conditions of people living nearby that area has also become worse.

It is evident that this is going to be an extremely difficult year for the people of Bundelkhand. How will the farmers face the looming hunger, with grain stocks having already dried up? What will be the impact of these conditions on women and children? People say it will be even more difficult to manage the shortage of drinking water and fodder. With debt levels already at a high, how will the farmers sow their next crop?

The time has come to realize the importance of saving water and we should all come together to discuss this issue and find possible solution as soon as possible
    `,
    date: "June 2016",
    author: "Akash Arya",
    tags: ["Water Crisis", "Water scarcity", "Bundelkhand crisis"],
  },
  1: {
    title: "Need of True Journalism",
    desc: `[#MEDIA](https://www.facebook.com/hashtag/media?source=feed_text) is known for its true and ideal news telecast about different topics of the world. But nowdays it becomes the hand of powerfull person or Nation.They manipulate news to genrate the intrest of common mass and sometimes ignore the true news due to political reasons.They plays an important role in the field of knowledge over different topics like political,social,economical,etc.Our view about any topic is completly dependent over it,but due to the false news our mind also moves in the away direction.There are alot of examples in which the fake news has caused a lot of turmoil within the social media as well. Instead of focussing the important topic like climate change, environment conservation,, they engage the mass over non sense topics like love jihad,beaf ban,star talks,castism,etc.\
    They should change its policy of money baked news and broadcast only truth and sensible news as the whole mass is dependent over it…`,
    date: "December 2015",
    author: "Ankit Mahato",
    tags: ["Media Importance", "Fake news", "Journalism"],
  },
  2: {
    title: "Education System",
    desc: `[#Education](https://www.facebook.com/hashtag/education?source=feed_text) is only way to acheive the mental,social,as well as economicap development of individual,society,country and world.\
Government plays an importan role in the development of each and every aspects of the society.But in our country the government as well as the commons are only focused on the development of infrastructure of the nation. No one talks about this primary path(education) of development...\
Not a singel government primary,secondry or high school which provide a quality of education.Every capable parent use to send their child to private school on a huge expense.We save this expense if government school's condition got updated.But not a single person is raising his voice or nither any government about this matter.\
Here higher education is limited to those branches where we can earn at the earliest because in our country there are only 2-5% of research colleges available.We are the one of the largest importers of the technology even we have a large force of engineers only due to the lack of research work.....

**Challenges:-**

The foremost challenges faced by the Education system are- \
1. Almost 80% of schools are managed by government. Private schools are way beyond the reach of the poor. Quality of teaching is way too low in government school.\
2. Mentality of people- Most unaware people think, more hands will serve more money to the family. So they engage there children in earning rather than studying. \
3. Poor infrastructure of all government schools. Poor quality of education. Only 3% of GDP is spend on education which is clearly insufficient. \
4. Teachers are not well qualified. They are also paid less so they show little interest on teaching.

25% of the Indian population is illiterate. Only 7% of the population that goes to school managed to graduate and only 15% of those who enrol manage to make it to high school.

**SOLUTIONS:-**

Now some steps that could be taken to improve the quality of education-

1. Rote learning- Interactive schools may have been introduced in India yet rote learning has its foot on majority of Indian schools. This restricts the student from strengthening the foundation of their concepts. This also shadows their imagination.

2. Marking system- Students are basically judged by 3 hours of their exam. But we don't understand that every child is different. As said by Einstein- "Everybody is a genius. But if you judge a fish by its 

3. Respect all streams- We live in a egoistic society in which people who are not in so called proclaimed jobs ate considered less worthy. We should understand that a dancer is as sufficient as an Engineer.

4. Variety in education system- There are a lot of variety to choose from nowadays. Have a free will. Don't follow footsteps, make your own mark.

5. The system of tuition classes- Tuitions kills a lot of time of students which can be used for recreation. If things are clear in school there is no need to take additional classes.
    `,
    date: "Dec, 2015",
    author: "Harsh Ranjan",
    tags: [
      "Education System",
      "Indian Education",
      "Governmnet school",
      "School",
    ],
  },
  3: {
    title: "Method and technique you can use to easily explain the students",
    desc: `**1. Playway Method:** The heaving of activities such as role-plays, virtual  games, singing, free play, and a lot more, to teach children. 

**2. Reggio Emilia Method:** The children are encouraged to  communicate through music, art, dance, writing, and more. The  parents are also involved in designing the curriculum and the entire  progress of the child is recorded.  

The approach believes in & is aimed at enabling the child to make  their own place in society. It encourages communication with others,  forms relationships, and promotes the child to wonder.  

**3. Waldorf Method:** The method focuses on enabling the child to grow  through imagination. A child must be able to use their imagination  and create through it. Thus, children are told stories, taken for walks,  made to play games, and create toys out of available material. 

**4. Montessori Method:** This method, in its essence, deals with  developing the personality of a child through sensory learning which  includes touching, smelling, seeing, and tasting, rather than learning  and reading. The classroom includes such self-correcting material,  the use of which is demonstrated by teachers and reenacted by  children. 

**5. Bank Street Method:** The method aims at the overall development of  the child through first-hand experiences. The former contains  activities like puzzles, building blocks, clay, etc which enable a child  to experience a given problem. 
    `,
    date: "09/06/2022",
    author: "Sudhanshu Raj",
    tags: ["Children Learning", "Child story"],
  },
  4: {
    title: "80G & 12A Certificate",
    desc: `**What is 80G Certificate?** 
    
80G is a certificate that exempts you part or fully from paying taxes, if you have made donations to  charitable trusts or section 8 company or organizations that are registered to offer you exemptions  from taxes.  

For e.g. A charitable organization or trust registered under section 12 A, allows you to avail tax  exemption under section 80G. There is however a maximum allowable deduction criteria. The  criterion is if the aggregate of the amount you donate exceeds 10% of the total gross income, then  the excess amount will not qualify for tax benefit. 

⮚ **How to Apply for an 80G Certificate:** 

Step 1: The organization must fill in an application for 80G certificate to the Income Tax  Commissioner.  

Step 2: Another Form 10G must be filed for further procedures.  

Step 3: An activity report for the past one to three years of the workings of the non-profit  organization must be provided by the audited statement. In some cases, it is to be provided from  the date of establishment.  

Step 4: All the forms of the audited statement and other documents are submitted with the 80G  Form to the department.  

Step 5: After the scrutinizing of the application, an inspection is done at the premises of the  organization by the Income Tax official. 

**Validity of 80G Certificate Income tax department issues 80G certificate only for a specific  period (usually 1-3 years).** 

⮚ **Eligibility for 80G Certificate:** 

Not all NGOs or trusts are eligible for 80G certification as there are certain rules and guidelines  regarding what nonprofits are eligible for. Here is a quick look at the several conditions  organisations have to meet to obtain an 80G certification:  

**Separation of business and charity:** If your organisation is involved in any business apart from  its charitable component, you will have to segregate it to receive an 80G exemption certificate 

**No misuse:** The donations received so far towards the cause should not be misused on any  account or used for any other purpose, even within the organisation. Hence, all such organisations  have to maintain strict accounting principles to prove they have not misused any funds  

**No religious activity:** Any NGO or trust that engages in religious preaching, or works for a  particular caste or creed, is not eligible for 80G certification  

**Proper accounting:** As mentioned earlier, organisations must maintain accurate and up-to-date  accounting books and records of financial transactions as proof before applying for 80G exemption  

**Appropriate registration:** The organisation must be with registration under the Societies  Registration Act of 1860 or Section 25 of the Companies Act of 1956.  

⮚ **Benefits of 80G Registration:** 

The donor will be directly benefited by the registration of the NGO with 80G. He is entitled to  claim tax deduction, using the receipt of donation received by you. In other words, he can use  the 80G registration of your NGO to deduct the amount that he has donated to your  organization from his total taxable income.  

There will be three-fold benefits of this registration:  

• As a society by law, 80G registration makes your NGO a promising prospect, boosting its  goodwill and the confidence of people associated with your brand.  

• It brings joy to the donor about contributing to a good cause while simultaneously  reducing the taxable income attached to it.  

• Only an NGO with 12A and 80G registration is eligible for government funding.  • Getting an 80G registration also facilitates seeking foreign contributions.  

  

⮚ **What is 12A Registration?**  

12A registration is a one-time registration which is granted by the Income Tax Department to  trusts and other not for profit organisations. The purpose of the registration is to be exempted from  the payment of income tax. 12A registration is generally applied for immediately after  incorporation. Section 8 Companies, Trusts and NGOs which have obtained 12A registration enjoy  exemption from paying income tax on their surplus income. The 12A registration facility is available  for all non-profit entities. Hence, it is necessary for all Trusts, NGOs and other Not-for-Profit  organisations to be aware of Section 12A of the Income Tax Act. The purpose of the present article  is to discuss the procedure for obtaining 12A registration.  

⮚ **Procedure for Obtaining 12A Registration** 

• The assessee is required to submit the application in the required format online. After the  application has been submitted, the Commissioner may request the applicant to submit  additional information or documents as needed. The Commissioner may make the request  in case there is a need to satisfy the Income Tax Department about the genuineness of the  activities undertaken by the trust.  

• The Commissioner may be satisfied with the application. In such cases, the Commissioner  will pass a written order mentioning that the assessee is eligible to obtain registration under  the section. The written order is forwarded to the assessee. On receipt of the order, the  assessee can obtain the privilege of registration under the section.  

• The commissioner may not be satisfied with the application. In such cases, the right is  available with the Commissioner to reject the application. The assessee should be informed  in writing of the reason for the rejection.  

⮚ **Eligibility for 12A Registration** 

• In order to qualify for registration under Section 12A, the organisation should meet the  definition of charitable purpose as defined in the Income Tax Act. Charitable purpose  means relief to the poor, education, medical relief and activities undertaken with the  objective of preserving the environment. The pursuit of any other objective of a public utility  will also qualify for a charitable purpose.  

• The primary qualifying criterion will be to check whether there is any profit motive involved  in the activities carried on by the assessee. In the absence of a profit motive, registration  shall be granted. 

• If the assessee is carrying on activities related to trade or commerce, then the facility  granted under this section is restricted. In such cases, registration is granted exclusively if  the receipts from the trade activity are less than twenty per cent of the total receipts of the  assessee.  

• Also, it may be noted that 12A Registration is not applicable for Private or Family Trusts.  The activities of the assessee should be genuinely for the benefit of the public.  

⮚ **Benefits of 12A Registration** 

• The fund used for charitable or religious purposes is considered to be the application of the  income. The income application refers to the expenses used for charitable or religious  purposes for calculating the taxable income of the not-for-profit organisation.  • The income received will be free from the charge of Income Tax.  

• The person who is registered under Section 12A can avail benefits for accumulating or  setting aside income. However, the income which is set aside should not be more than 15%  of the amount applied towards charitable or other non-commercial purposes.  

• The accumulation of income which is considered to be the income application shall not be  included in the assessee’s total income.  

• NGOs are entitled to receive grants as funds from domestic and international sources.  These agencies are entitled to provide grants to NGOs which have obtained registration  under this section.  

• The registration which is granted under Section 12A shall be treated as a one-time  registration. Once the registration is made, the registration will be active until the date of  cancellation.  

There is no requirement to renew the registration periodically. Hence, the registration benefits can  be claimed NGO as and when the requirement arises.

    `,
    date: "05/06/2022",
    author: "Sudhanshu Raj",
    tags: [
      "80G registration",
      "12A registration",
      "Grants",
      "Funds",
      "Eligibility for 12A ",
    ],
  },
  5: {
    title: "Corporate Social Responsibility",
    desc: `Definition:

Corporate social responsibility (CSR) is a form of international private business self-regulation which aims to contribute to societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically oriented practices.

Corporate Social Responsibility (CSR) is divided into four categories:

1. Environmental Responsibility: It means the organizations should work keeping the environment as safe as possible.
2. Ethical Responsibility: It means the organizations should operate in a fair and legal manner and not using unfair means to reach goal.
3. Philanthropic Responsibility: A responsibility which aims to make society and world a better place.
4. Economic Responsibility: Maintaining the financial goals and handling commitments accordingly.

Applicability Of CSR:

According to Goodera, Section 135 of the Companies Act, 2013 is applicable to every company registered under the Act, and any other previous Companies Law, with a net worth of Rs 500 crore or more, or a turnover of over Rs 1,000 crore or a net profit exceeding Rs 5 crore in any financial year.

The Board of Directors shall make sure that the company spends in every financial year, **minimum of 2% of the average net profits made during the 3 immediately preceding financial years as per CSR policy.**

Areas in which CSR is used:

1. Eradicating Hunger
2. Better Education and Livelihood
3. Health Sector
4. Promoting Gender and Social Equality
5. Protecting Environment
6. Promoting Art & Culture
7. Army
8. Sports
9. Incubators
10. Rural Development
11. Slum Development

CSR Committee:

**Constitution and functions of CSR Committee**

The CSR Committee of the Board shall consist of three or more directors, out of which at least one shall be an independent director.

Foreign companies shall constitute CSR Committee with at least two persons in which one must be a resident person, authorised to accept notices/ documents served on the foreign company and the other as nominated by the foreign company.

Unlisted public company (UPC) or a private company, which otherwise does not require an independent director on its board, shall not need an independent director for the purposes of this committee.

Any private company which only has two directors on its board shall have the said two directors in the CSR committee.

**Functions of CSR Committee**

- Formulation and recommend to the Board, a Corporate Social Responsibility Policy which shall indicate the projects/activities to be undertaken by the Company in areas or subject, as specified in Schedule VII.
- Reviewing with the CSR management, the quarterly financial statements before submission to the Board for approval.
- Recommend the amount of expenditure to be incurred on CSR projects/activities undertaken.
- To constitute Management Committee for implementation and execution of CSR initiatives/ activities.
- Shall institute a transparent monitoring mechanism for implementation of CSR projects/activities undertaken by the company.
- Reviewing performance of the Company in the areas of CSR.
- Submit an annual report of CSR projects/activities to the board.
- Monitoring CSR Policy from time to time

Companies operating in Noida and eligible for CSR:

1. Dalmia Group
2. Buddy4study India
3. The Ponty Chadha Group
4. Jubilant Bhartia Group
5. HCL 
6. Noida Power Company Limited
    
    `,
    date: "June 2022",
    author: "Siddhant Srivastava",
    tags: ["HCL", "CSR funding", "Grant"],
  },
};
