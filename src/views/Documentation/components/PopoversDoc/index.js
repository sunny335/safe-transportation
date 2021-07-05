import React, { useState } from 'react';
import {
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from 'reactstrap';

import DocCard from '../DocCard';

const PopoversDoc = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <DocCard title="popovers" id="popovers">
      {/** base popovers */}
      <div>
        <Button id="Popover1" type="button">
          Launch Popover
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="Popover1"
          toggle={toggle}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
      </div>
      <hr />
      <div>
        <Button id="PopoverFocus" type="button">
          Launch Popover (Focus)
        </Button>{' '}
        <Button id="PopoverClick" type="button">
          Launch Popover (Click)
        </Button>{' '}
        <Button id="PopoverLegacy" type="button">
          Launch Popover (Legacy)
        </Button>
        <UncontrolledPopover
          trigger="focus"
          placement="bottom"
          target="PopoverFocus"
        >
          <PopoverHeader>Focus Trigger</PopoverHeader>
          <PopoverBody>
            Focusing on the trigging element makes this popover appear. Blurring
            (clicking away) makes it disappear. You cannot select this text as
            the popover will disappear when you try.
          </PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover
          trigger="click"
          placement="bottom"
          target="PopoverClick"
        >
          <PopoverHeader>Click Trigger</PopoverHeader>
          <PopoverBody>
            Clicking on the triggering element makes this popover appear.
            Clicking on it again will make it disappear. You can select this
            text, but clicking away (somewhere other than the triggering
            element) will not dismiss this popover.
          </PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover
          trigger="legacy"
          placement="bottom"
          target="PopoverLegacy"
        >
          <PopoverHeader>Legacy Trigger</PopoverHeader>
          <PopoverBody>
            Legacy is a reactstrap special trigger value (outside of bootstrap's
            spec/standard). Before reactstrap correctly supported click and
            focus, it had a hybrid which was very useful and has been brought
            back as trigger="legacy". One advantage of the legacy trigger is
            that it allows the popover text to be selected while also closing
            when clicking outside the triggering element and popover itself.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </DocCard>
  );
};

export default PopoversDoc;
