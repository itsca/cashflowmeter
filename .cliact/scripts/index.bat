@echo off
if not exist "../../%2/%3" md "../../%2/%3"
@PowerShell "(GC ../code_templates/%1/Template.tsx)|%%{$_ -Replace 'TEMPLATE','%3'}|SC ../../%2/%3/%3.tsx"
@PowerShell "(GC ../code_templates/%1/Template.test.tsx)|%%{$_ -Replace 'TEMPLATE','%3'}|SC ../../%2/%3/%3.test.tsx"
