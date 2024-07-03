import ReactDOM from 'react-dom/client'

import React from 'react'

import * as SurveyCore from 'survey-core'

import * as SurveyReactUi from 'survey-react-ui'

import * as SurveyCreatorReact from 'survey-creator-react'

import k from './xt/lang/base-lib'

import client from './xt/lang/base-client'

import app_client from './app-client'

// ep2-survey-tooling.app/__import__ [25] 
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
Object.defineProperty((globalThis),"React",{"value":React,"writeable":true});
Object.defineProperty((globalThis),"ReactDOM",{"value":ReactDOM,"writeable":true});
Object.defineProperty(
  (globalThis),
  "SurveyCore",
  {"value":SurveyCore,"writeable":true}
);
Object.defineProperty(
  (globalThis),
  "SurveyReactUi",
  {"value":SurveyReactUi,"writeable":true}
);
Object.defineProperty(
  (globalThis),
  "SurveyCreatorReact",
  {"value":SurveyCreatorReact,"writeable":true}
);

// ep2-survey-tooling.app/surveyData [31] 
var surveyData = {
  "title":"Learn the Signs, Act Early",
  "pages":[
    {
    "elements":[
      {
      "type":"panel",
      "name":"personal",
      "title":"Personal Information",
      "showQuestionNumbers":"off",
      "elements":[
        {
        "type":"text",
        "name":"ltsae_dob",
        "title":"Birthday",
        "inputType":"date",
        "minValueExpression":"today(-72*30)",
        "maxValueExpression":"today(-36*30)",
        "defaultValueExpression":"today(-4*365)",
        "isRequired":true
      }
      ]
    }
    ]
  },
    {
    "visibleIf":"dateDiff({ltsae_dob}, today(), \"months\") <= 48",
    "elements":[
      {
      "type":"panel",
      "name":"panel_36",
      "title":"3 to 4 years old",
      "elements":[
        {
        "type":"boolean",
        "name":"ltsae_36m_q01",
        "title":"Calms down within 10 minutes after you leave them, like at a childcare drop off",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q02",
        "title":"Notices other children and joins them to play",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q03",
        "title":"Talks with you in conversation using at least two back-and-forth exchanges",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q04",
        "title":"Asks \"who,\" \"what,\" \"where,\" or \"why\" questions, like \"Where is mummy/daddy?\"",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q05",
        "title":"Says what action is happening in a picture or book when asked, like \"running,\" \"eating,\" or \"playing\"",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q06",
        "title":"Says first name, when asked",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q07",
        "title":"Talks well enough for others to understand, most of the time",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q08",
        "title":"Draws a circle, when you show them how",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q09",
        "title":"Avoids touching hot objects, like a stove, when you warn them",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q10",
        "title":"Strings items together, like large beads or macaroni",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q11",
        "title":"Puts on some clothes by themself, like loose pants or a jacket",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_36m_q12",
        "title":"Uses a fork",
        "choices":["Yes","No"]
      }
      ]
    }
    ]
  },
    {
    "visibleIf":"dateDiff({ltsae_dob}, today(), \"months\") > 48 && dateDiff({ltsae_dob}, today(), \"months\") <= 60",
    "elements":[
      {
      "type":"panel",
      "name":"panel_48",
      "title":"4 to 5 years old",
      "elements":[
        {
        "type":"boolean",
        "name":"ltsae_48m_q01",
        "title":"Pretends to be something else during play (teacher, superhero, dog)",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q02",
        "title":"Asks to go play with children if none are around, like 'Can I play with Alex?'",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q03",
        "title":"Comforts others who are hurt or sad, like hugging a crying friend",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q04",
        "title":"Avoids danger, like not jumping from tall heights at the playground",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q05",
        "title":"Likes to be a 'helper'",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q06",
        "title":"Changes behavior based on where they are (place of worship, library, playground)",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q07",
        "title":"Says sentences with four or more words",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q08",
        "title":"Says some words from a song, story, or nursery rhyme",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q09",
        "title":"Talks about at least one thing that happened during their day, like 'I played soccer.'",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q10",
        "title":"Answers simple questions like 'What is a coat for?' or 'What is a crayon for?'",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q11",
        "title":"Names a few colours of items",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q12",
        "title":"Tells what comes next in a well-known story",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q13",
        "title":"Draws a person with three or more body parts",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q14",
        "title":"Catches a large ball most of the time",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q15",
        "title":"Serves themselves food or pours water, with adult supervision",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q16",
        "title":"Unbuttons some buttons",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_48m_q17",
        "title":"Holds crayon or pencil between fingers and thumb (not a fist)",
        "choices":["Yes","No"]
      }
      ]
    }
    ]
  },
    {
    "visibleIf":"dateDiff({ltsae_dob}, today(), \"months\") > 60",
    "elements":[
      {
      "type":"panel",
      "name":"panel_60",
      "title":"5 years old or over",
      "elements":[
        {
        "type":"boolean",
        "name":"ltsae_60m_q01",
        "title":"Follows rules or takes turns when playing games with other children",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q02",
        "title":"Sings, dances, or acts for you",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q03",
        "title":"Does simple chores at home, like matching socks or clearing the table after eating",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q04",
        "title":"Tells a story they heard or made up with at least two events. For example, a cat was stuck in a tree and a firefighter saved it",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q05",
        "title":"Answers simple questions about a book or story after you read or tell it to them",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q06",
        "title":"Keeps a conversation going with more than three back-and-forth exchanges",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q07",
        "title":"Uses or recognizes simple rhymes (bat-cat,ball-tall)",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q08",
        "title":"Counts to 10",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q09",
        "title":"Names some numbers between 1 and 5 when you point to them",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q10",
        "title":"Uses words about time, like \"yesterday,\" \"tomorrow,\" \"morning,\" or \"night\"",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q11",
        "title":"Pays attention for 5 to 10 minutes during activities. For example, during story time or making arts and crafts (screen time does not count)",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q12",
        "title":"Writes some letters in their name",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q13",
        "title":"Names some letters when you point to them",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q14",
        "title":"Buttons some buttons",
        "choices":["Yes","No"]
      },
        {
        "type":"boolean",
        "name":"ltsae_60m_q15",
        "title":"Hops on one foot",
        "choices":["Yes","No"]
      }
      ]
    }
    ]
  }
  ]
};

// ep2-survey-tooling.app/App [67] 
function App(){
  return (
    <>
      <app_client.AppClient port={61153}></app_client.AppClient>
      <SurveyReactUi.Survey model={new SurveyCore.Model(surveyData)}></SurveyReactUi.Survey>
    </>);
}

// ep2-survey-tooling.app/__main__ [80] 
ReactDOM.createRoot(document.getElementById("root")).render((
  <React.StrictMode><App></App></React.StrictMode>));