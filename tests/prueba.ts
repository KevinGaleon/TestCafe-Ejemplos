/* eslint-disable */
import { RequestLogger, Selector } from "testcafe";
import Survey from "../src/page-objects/survey/survey";
const logger = RequestLogger(/^((?!sockjs).)*$/);
import MultipleChoiceQuestion from "../src/page-objects/survey/items/MultipleChoiceQuestion";

fixture('Survey')
  .page('http://localhost:3001/c4397241b519f7de246ca5ae114fa1a0a8bf416f1daa1e4eacbe741fa6a6004f?test')

test.requestHooks(logger)('Should follow the path correctly', async (t) => {
while (logger.requests.some(r => !r.response)) {
          await t.wait(2500);
          console.log('waiting...');
        }
const s = new Survey(logger);
await s.scanDOMQuestions();
await s.question(1).fillWith(["yellow","red"]);
  await s.goToNextPage();
await s.question(2).fillWith(["mice","dog"]);
  await s.goToNextPage();
const questions = Selector(".questions").find(".abc");
const selector = questions.nth(0).find("div");
  const questionType: string = (await selector.withAttribute("data-type").attributes)["data-type"];
  await t.expect(questionType).eql("input");
  let questionTitle: string = await selector.withAttribute("data-id", "title").innerText;
  if (questionTitle.endsWith("*")) {
    questionTitle = questionTitle.substring(0, questionTitle.length - 1);
  }
  await t.expect(questionTitle).eql("grid question man $");
await s.question(3).fillWith({"r1":1,"r2":2,"r3":3});
  await s.goToNextPage();
await s.question(4).fillWith(["up","down","center"]);
  await s.goToNextPage();
await s.question(5).fillWith(4);
  await s.goToNextPage();
await s.question(6).fillWith({"ro 1":"hi there!","rr3":"ciao piano","row 2":"wadafac..."});
  await s.goToNextPage();
await s.question(7).fillWith({"otra":8,"prime":1,"yas":3});
  await s.goToNextPage();
await s.question(8).fillWith({"value":3,"comment":"mi comment beibi... :)"});
  await s.goToNextPage();
await s.question(9).fillWith({"tv":33,"sports":33,"music":34});
  await s.goToNextPage();
await s.question(10).fillWith({"values":{"osa":"right","oso":"left","tony":"right"}});
  await s.goToNextPage();
await s.question(11).fillWith({"byPosition":true,"values":{"1":"right","3":"left"}});
  await s.goToNextPage();
await s.question(12).fillWith({"byPosition":true,"values":{"1":"right","2":"left"}});
  await s.goToNextPage();
await s.question(13).fillWith(1);
  await s.goToNextPage();
await s.question(14).fillWith(1);
  await s.goToNextPage();
await s.question(15).fillWith(2);
  await s.goToNextPage();
  await s.startConceptTest();
  await s.closeConceptTestAfter(1000);
  await s.goToNextPage();
await s.question(16).fillWith({"month":1,"day":5,"year":2020});
  await s.goToNextPage();
await s.question(17).fillWith({"r1":2});
  await s.goToNextPage();
  await s.startConceptTest();
  await s.closeConceptTestAfter(1000);
  await s.goToNextPage();
await s.question(18).fillWith({"month":2,"day":3,"year":2020});
  await s.goToNextPage();
await s.question(19).fillWith({"r1":3});
  await s.goToNextPage();
  await s.startConceptTest();
  await s.closeConceptTestAfter(1000);
  await s.goToNextPage();
await s.question(20).fillWith({"month":1,"day":1,"year":2020});
  await s.goToNextPage();
await s.question(21).fillWith({"r1":1});
  await s.goToNextPage();
await s.question(22).fillWith({"firstName":"El","lastName":"Pepe","email":"el@pepe.com","phone":2015550123,"address1":"por ahi","address2":"y por alla","country":"United States","state":"Florida","zip":33195});
  await s.goToNextPage();
  await s.startConceptTest();
await s.question(23).fillWith([{"option":"iugg","comment":"this is trash!"},{"option":"woww","comment":"like it bruh"}]);
  await s.goToNextPage();
  await s.submit();
});