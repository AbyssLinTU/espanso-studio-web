export interface SnippetData {
  id: string;
  title: string;
  description: string;
  trigger: string;
  category: 'date' | 'git' | 'docker' | 'shell' | 'communication' | 'development';
  yaml: string;
}

export const snippetsData: SnippetData[] = [
  {
    id: 'date-today',
    title: 'Current Date',
    description: 'Inserts today\'s date in ISO format (YYYY-MM-DD)',
    trigger: ':date',
    category: 'date',
    yaml: `matches:
  - trigger: ":date"
    replace: "{{today}}"
    vars:
      - name: today
        type: date
        params:
          format: "%Y-%m-%d"`,
  },
  {
    id: 'date-datetime',
    title: 'Full DateTime Stamp',
    description: 'Inserts full date and time with timezone',
    trigger: ':dt',
    category: 'date',
    yaml: `matches:
  - trigger: ":dt"
    replace: "{{now}}"
    vars:
      - name: now
        type: date
        params:
          format: "%Y-%m-%d %H:%M:%S"`,
  },
  {
    id: 'git-commit',
    title: 'Git Commit (Conventional)',
    description: 'Opens a form to create a conventional commit message',
    trigger: ':gcommit',
    category: 'git',
    yaml: `matches:
  - trigger: ":gcommit"
    replace: "git commit -m '{{type}}({{scope}}): {{message}}'"
    vars:
      - name: type
        type: choice
        params:
          values:
            - feat
            - fix
            - docs
            - style
            - refactor
            - test
            - chore
      - name: scope
        type: form
        params:
          layout: "Scope: [[value]]"
      - name: message
        type: form
        params:
          layout: "Message: [[value]]"`,
  },
  {
    id: 'git-branch',
    title: 'Git Feature Branch',
    description: 'Creates a new feature branch with a form prompt',
    trigger: ':gbranch',
    category: 'git',
    yaml: `matches:
  - trigger: ":gbranch"
    replace: "git checkout -b feature/{{name}}"
    vars:
      - name: name
        type: form
        params:
          layout: "Branch name: [[value]]"`,
  },
  {
    id: 'docker-run',
    title: 'Docker Run Interactive',
    description: 'Runs a Docker container in interactive mode with shell',
    trigger: ':drun',
    category: 'docker',
    yaml: `matches:
  - trigger: ":drun"
    replace: "docker run -it --rm {{image}} /bin/bash"
    vars:
      - name: image
        type: form
        params:
          layout: "Image name: [[value]]"`,
  },
  {
    id: 'docker-compose',
    title: 'Docker Compose Up',
    description: 'Starts all services defined in docker-compose.yml',
    trigger: ':dcup',
    category: 'docker',
    yaml: `matches:
  - trigger: ":dcup"
    replace: "docker-compose up -d --build"`,
  },
  {
    id: 'shell-mkcd',
    title: 'mkdir + cd',
    description: 'Creates a directory and immediately navigates into it',
    trigger: ':mkcd',
    category: 'shell',
    yaml: `matches:
  - trigger: ":mkcd"
    replace: "mkdir -p {{dir}} && cd {{dir}}"
    vars:
      - name: dir
        type: form
        params:
          layout: "Directory name: [[value]]"`,
  },
  {
    id: 'shell-findport',
    title: 'Find Process by Port',
    description: 'Finds which process is listening on a given port',
    trigger: ':findport',
    category: 'shell',
    yaml: `matches:
  - trigger: ":findport"
    replace: "netstat -ano | findstr :{{port}}"
    vars:
      - name: port
        type: form
        params:
          layout: "Port number: [[value]]"`,
  },
  {
    id: 'email-reply',
    title: 'Professional Email Reply',
    description: 'Inserts a polite professional email reply opener',
    trigger: ':ereply',
    category: 'communication',
    yaml: `matches:
  - trigger: ":ereply"
    replace: |
      Thank you for your message. I appreciate you reaching out.
      
      {{body}}
      
      Best regards,
      {{name}}
    vars:
      - name: body
        type: form
        params:
          layout: "Reply body: [[value]]"
      - name: name
        type: form
        params:
          layout: "Your name: [[value]]"`,
  },
  {
    id: 'dev-todo',
    title: 'Code TODO Comment',
    description: 'Inserts a structured TODO comment with author and date',
    trigger: ':todo',
    category: 'development',
    yaml: `matches:
  - trigger: ":todo"
    replace: "// TODO({{author}}) [{{date}}]: {{task}}"
    vars:
      - name: author
        type: form
        params:
          layout: "Author: [[value]]"
      - name: task
        type: form
        params:
          layout: "Task: [[value]]"
      - name: date
        type: date
        params:
          format: "%Y-%m-%d"`,
  },
];
