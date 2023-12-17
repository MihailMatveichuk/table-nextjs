'use client';

import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const NewIsuuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Search issue..." className="w-[20]" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Create New Issue</Button>
    </div>
  );
};

export default NewIsuuePage;
