import React from 'react';

export default function ({ codeMap, storiesList, onGenMD }) {
    return (
      <div>
        <div>
          <button onClick={onGenMD}>
                Generate Markdown
            </button>
        </div>
        <textarea cols="40" rows="30" value={mdGen(codeMap)} onChange={() => {}} />
      </div>);
}


function mdGen(codeMap) {
//    console.log('codeMap', codeMap);
    const keys = codeMap ? Object.keys(codeMap) : [];
    let str = '';
    keys.forEach((val) => {
        str = str.concat(storyToMD(codeMap[val]));
    });
    return str;
}

function storyToMD(info) {
    const title = `# ${info.context.kind} > ${info.context.story}\n\n`;
    const desc = `${info.info}\n\n`;
    const src = `\`\`\`\n${info.src}\n\`\`\`\n`;
    const md = `${title}${desc}${src}\n`;
    return md;
}
