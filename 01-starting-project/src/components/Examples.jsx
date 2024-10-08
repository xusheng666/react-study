import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { useState } from "react";
import Tabs from "./Tabs.jsx";

export default function Examples() {

    const [selectedTopic, setTabContent] = useState();
    let tabContent = <p>Please click a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    function handleSelect(selectedButton) {
        setTabContent(selectedButton);
        console.log(selectedButton);
    }


    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>            
        </Section>
    );
}