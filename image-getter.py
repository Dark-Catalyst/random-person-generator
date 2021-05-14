# "C:\Users\Noah Shoup\anaconda3\python.exe" -i "$(FULL_CURRENT_PATH)"

import os
import glob

# Define path
path = os.path.abspath(os.path.dirname(__file__))
os.chdir(path)

#open a file to write to 
jsFile = open('imagePaths.js','w')

#build list of body parts
bodyparts = ['heads', 'bodies', 'legs']

for bodypart in bodyparts:

    #get a list of images 
    images = glob.glob(f'static{os.sep}images{os.sep}{bodypart}{os.sep}*')

    imagesText = str(images).replace("\\\\", "/").replace("static", "./static")
    
    #check if bodypart is bodies
    if bodypart == 'bodies':
        bodypart = 'bodys'
    
    #write begining of line
    jsFile.write(f'var {bodypart[:-1]}Images = {imagesText}\n')



jsFile.close()














