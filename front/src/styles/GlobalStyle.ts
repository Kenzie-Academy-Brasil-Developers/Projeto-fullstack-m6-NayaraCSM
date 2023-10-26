import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-brand-1: #4529E6;
    --color-brand-2: #5126EA;
    --color-brand-3: #80A6F0;
    --color-brand-4: #EDEAFD;

    --color-grey-0: #080D0D;
    --color-grey-1: #212529;
    --color-grey-2: #495057;
    --color-grey-3: #868E96;
    --color-grey-4: #ADB5BD;
    --color-grey-5: #CED4DA;
    --color-grey-6: #DEE2E6;
    --color-grey-7: #E9ECEF;
    --color-grey-8: #F1F3F5;
    --color-grey-9: #F8F9FA;
    --color-grey-10: #FDFDFD;
    --color-white-fixed: #FFFFFF;

    --color-alert-1: #CD2B31;
    --color-alert-2: #FDD8D8;
    --color-alert-3: #FFE5E5;
    --color-sucess-1: #18794E;
    --color-sucess-2: #CCEBD7;
    --color-sucess-3: #DDF3E4;

    --color-random-1: #E34D8C;
    --color-random-2: #C04277;
    --color-random-3: #7D2A4D;
    --color-random-4: #7000FF;
    --color-random-5: #5200E3;
    --color-random-6: #36007D;
    --color-random-7: #349974;
    --color-random-8: #2A7D5F;
    --color-random-9: #153D2E;
    --color-random-10: #6100FF;
    --color-random-11: #5700E3;
    --color-random-12: #30007D;

    --heading-1-700-font-weight: 700;
    --heading-1-700-font-size: 44px;

    --heading-2-600-font-weight: 600;
    --heading-2-600-font-size: 36px;

    --heading-3-600-font-weight: 600;
    --heading-3-600-font-size: 32px;

    --heading-3-500-font-weight: 500;
    --heading-3-500-font-size: 32px;

    --heading-4-600-font-weight: 600;
    --heading-4-600-font-size: 28px;

    --heading-4-500-font-weight: 500;
    --heading-4-500-font-size: 28px;

    --heading-5-600-font-weight: 600;
    --heading-5-600-font-size: 24px;

    --heading-5-500-font-weight: 500;
    --heading-5-500-font-size: 24px;

    --heading-6-600-font-weight: 600;
    --heading-6-600-font-size: 20px;

    --heading-6-500-font-weight: 500;
    --heading-6-500-font-size: 20px;

    --heading-7-600-font-weight: 600;
    --heading-7-600-font-size: 16px;

    --heading-7-500-font-weight: 500;
    --heading-7-500-font-size: 16px;

    --body-1-400-font-weight: 400;
    --body-1-400-font-size: 16px;

    --body-1-600-font-weight: 400;
    --body-1-600-font-size: 16px;

    --body-2-400-font-weight: 400;
    --body-2-400-font-size: 14px;

    --body-2-500-font-weight: 500;
    --body-2-500-font-size: 14px;

    --button-big-text-font-weight: 600;
    --button-big-text-font-size: 16px;

    --button-medium-text-font-weight: 600;
    --button-medium-text-font-size: 14px;

    --input-placeholder-font-weight: 400;
    --input-placeholder-font-size: 16px;

    --input-label-font-weight: 500;
    --input-label-font-size: 14px; 

  }

  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    font-family: 'Inter', sans-serif;
  }

  button {
    background: transparent;
    cursor: default;
    padding: 1px 6px;
    text-align: center;
  }
`;
