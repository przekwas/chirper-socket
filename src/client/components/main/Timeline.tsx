import * as React from 'react';

export interface TimeLineProps { }

const TimeLine: React.SFC<TimeLineProps> = ({ children }) => {
    return (
        <section className="row">
            {children}
        </section>
    );
}

export default TimeLine;