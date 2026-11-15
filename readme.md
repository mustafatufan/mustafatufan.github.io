> A perfect resume did not exi...

<p align="center">
	<img width="192" height="192" src="https://tufan.ee/images/icon_domain.svg">
</p>

---
# Printable Resume Website
[**`tufan.ee`**](https://tufan.ee) is my resume website that is hosted on Github Pages.

## Tech Stack
- Bootstrap 5.3
- Font Awesome 6.7
- Vanilla JavaScript (no jQuery)

## Rules
- Printable
- Must represent whole career, experience and skills
- Clear & minimal
- Readable by applicant tracking systems (ATS)

## Usage
Fork and complete [Github Pages setup](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages).

Change information as yours: `/index.html`

Change website icon: `/images/icon.png`

Change resume photo: `/images/me.jpeg`

## Printing to PDF
Open the page in Chrome, press `Ctrl/Cmd + P` and save as PDF with the default settings:

- Margins: **Default**
- Scale: **Default** (100)
- Headers and footers: **off**

The page prints on A4 in two pages. Replace `/pdf/Mustafa_Tufan_Software_Engineer_Resume.pdf` with the result after every content change.

## ATS rules
The printed PDF is what applicant tracking systems parse, so the page keeps to these rules:

- One column of real headings (`h1`, `h2`, `h3`), paragraphs and lists. No tables for layout.
- Standard section names: Summary, Skills, Experience, Projects, Education.
- Name on the first line, then contact details as plain text (address, phone, e-mail, LinkedIn, GitHub).
- Each job has its title and dates on one line (`Mon YYYY - Mon YYYY`), then company and location on the next.
- Icons and other decoration are hidden in print (`d-print-none`), because icon fonts end up as unreadable characters in the PDF text.
- The photo is printed at the top right, as is customary on German CVs. It is a plain flex item, not a positioned element: Chrome writes positioned elements after the rest of the page, which would move the header text behind the Summary.
- No page numbers or other page margin content: Chrome writes it as the first text of the PDF, ahead of the name.

To check what a parser reads, run `pdftotext -raw pdf/Mustafa_Tufan_Software_Engineer_Resume.pdf - | head`. The first line must be the name, followed by the headline and the contact details.

---
##### Tech stack tag ordering convention
1. Industry, domain
2. Programming languages
3. Frameworks, libraries, etc. that are related with those programming languages
4. Development terms like *RESTful API*
5. Databases
6. Version control tools
7. Container tools
8. Other CI/CD tools
9. Servers like *Tomcat*
10. Third party services like *Admob* or *Google Play Game Services*

- *The order of the same types should be according to importance & experience.*
- *Typing of the all terms must be the same with title of its Wikipedia article. (For example, it should be Apache Ant, not Ant.)*

## Contributing
Pull requests are welcome without changing personal information.

## License
[MIT](https://choosealicense.com/licenses/mit/)
