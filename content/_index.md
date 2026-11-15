---
title: ''
summary: ''
date: 2026-01-05
type: landing
sections:
- block: dev-hero
  id: hero
  content:
    username: me
    greeting: Hi, I'm
    show_status: true
    show_scroll_indicator: true
    typewriter:
      enable: false
      prefix: I build
      strings:
      - Mobile Robots
      - Autonomous Drones
      - Embedded Systems
      - Integrated Mechatronic systems
      type_speed: 70
      delete_speed: 40
      pause_time: 2500
    cta_buttons:
    - text: View My Work
      url: '#projects'
      icon: arrow-down
    - text: Download Resume
      url: /uploads/resume.pdf
      icon: arrow-down-tray
  design:
    style: centered
    avatar_shape: circle
    animations: false
    background:
      color:
        light: '#fafafa'
        dark: '#0a0a0f'
    spacing:
      padding:
      - 6rem
      - '0'
      - 4rem
      - '0'
- block: portfolio
  id: projects
  content:
    title: Selected Engineering Projects
    subtitle: From CAD and circuit boards to built drones, robots, and custom tooling
    count: 0
    filters:
      folders:
      - projects
    buttons:
    - name: All
      tag: '*'
    - name: UAVs
      tag: UAV
    - name: Autonomous Systems
      tag: Autonomous Systems
    - name: Electronics
      tag: Electronics
    - name: Electromechanics
      tag: Electromechanics
    - name: Manufacturing
      tag: Manufacturing
    default_button_index: 0
  design:
    columns: 3
    background:
      color:
        light: '#ffffff'
        dark: '#0d0d12'
    spacing:
      padding:
      - 4rem
      - '0'
      - 4rem
      - '0'
- block: workshop
  id: workshop
  content:
    title: At the Workbench
    text: My work connects design with hands-on assembly, testing, and team development.
    photos:
    - src: /images/workshop/soldering.jpg
      caption: Electronics assembly and soldering at the workbench.
    - src: /images/workshop/battery.jpg
      caption: Preparing a battery pack during hardware development.
    - src: /images/workshop/mentoring.jpg
      caption: Working through an engineering task with a colleague.
  design:
    spacing:
      padding:
      - 4rem
      - '0'
      - 4rem
      - '0'
- block: tech-stack
  id: skills
  content:
    title: Engineering Skills & Tools
    subtitle: Tools and technologies I use to design and build autonomous systems
    categories:
    - name: Mechanical Design & Analysis
      items:
      - name: SolidWorks
        icon: custom/Solid
      - name: Autodesk Fusion
        icon: custom/Fusion
      - name: Ansys
        icon: custom/Ansys
      - name: MSC Adams
        icon: custom/Adams
    - name: Electronics & PCB Design
      items:
      - name: KiCad
        icon: custom/KiCad
      - name: Proteus
        icon: custom/Proteus
    - name: Languages & Programming Tools
      items:
      - name: Python
        icon: brands/python
      - name: C
        icon: custom/C
      - name: ROS
        icon: custom/ROS
      - name: MATLAB
        icon: custom/matlab
  design:
    style: grid
    show_levels: false
    background:
      color:
        light: '#f5f5f5'
        dark: '#08080c'
    spacing:
      padding:
      - 4rem
      - '0'
      - 4rem
      - '0'
- block: resume-experience
  id: experience
  content:
    title: Experience
    date_format: Jan 2006
  design:
    columns: '1'
    background:
      color:
        light: '#ffffff'
        dark: '#0d0d12'
    spacing:
      padding:
      - 4rem
      - '0'
      - 4rem
      - '0'
- block: contact-info
  id: contact
  content:
    title: Get In Touch
    subtitle: Let's build something amazing together
    text: "I am always open to exploring new engineering opportunities \nand challenging\
      \ projects. Whether you are looking to hire, \ncollaborate, or simply connect,\
      \ please feel free to reach out."
    email: Mohamed.t.keshk@gmail.com
    autolink: true
  design:
    columns: '1'
    background:
      color:
        light: '#ffffff'
        dark: '#0d0d12'
    spacing:
      padding:
      - 4rem
      - '0'
      - 4rem
      - '0'
- block: cta-card
  content:
    title: Open to Opportunities
    text: 'I''m currently looking for **senior mechatronics engineer** or **tech lead**
      roles.


      Let''s connect and discuss how I can help your team.'
    button:
      text: Download Resume
      url: uploads/resume.pdf
      new_tab: true
  design:
    card:
      css_class: bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200
        dark:from-primary-600 dark:via-primary-700 dark:to-secondary-700
      text_color: dark
    background:
      color:
        light: '#f5f5f5'
        dark: '#08080c'
    spacing:
      padding:
      - 4rem
      - '0'
      - 6rem
      - '0'
---
