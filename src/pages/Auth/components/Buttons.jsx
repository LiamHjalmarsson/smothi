import React from 'react';
import Button from '../../../components/ui/Button';
import LinkButton from '../../../components/ui/LinkButton';

const Buttons = ({ submitText, text, path, pathText }) => {
    return (
        <div className="mt-2 flex flex-col gap-2 text-center">
            <Button>
                {submitText}
            </Button>
            <div className="mt-2 flex flex-col">
                <span className='-mb-2'> 
                    {text}
                </span>
                <LinkButton to={`/${path}`} linkType="tinary">
                    {pathText}
                </LinkButton>
            </div>
        </div>
    );
}

export default Buttons;
