Remove-Item .\dist\*.css -ErrorAction Ignore
Remove-Item .\dist\*.css.map -ErrorAction Ignore

sass .\styles\validitron.scss .\dist\validitron.css