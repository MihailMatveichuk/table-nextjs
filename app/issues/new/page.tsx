'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const NewIsuuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Search issue..." className="w-[20]" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button color="cyan">Submit New Issue</Button>
    </div>
  );
};

export default NewIsuuePage;
