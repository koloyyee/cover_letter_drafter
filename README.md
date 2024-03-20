# Draft My Cover Letter

Cover Letter Drafter is an LLM-powered epistoler,
that helps job applicants to draft a cover letter.

## Goal
- Users uploaded their resume in pdf/docx, 
- Input the company title, position, job description 
- Output AI generated Cover Letter Draft.

## Non-Goal
- Job board.
- Not storing user's document (yet)
- No login/register required.

## Design
1. React frontend form drop/upload file -> 
2. Spring Boot backend -> 
3. extract pdf text with the rest of the user inputs -> 
4. Ask OpenAI/Gemini ->
5. Server Sent Event push back to React frontend.

## TODO
- []: Frontend unit test with Jest
- []: E2E with Playwright

