# # import sys
# import os
# # sys.path.insert(1, 'C:/Users/mohit/OneDrive/Desktop/Github/Levitation')
# os.system('server.py')
# os.system('set FLASK_APP=server')
# os.system('flask run')
# # import server

from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
import time

ser = Service("C:/Users/mohit/OneDrive/Desktop/Github/Levitation/msedgedriver.exe")
driver = webdriver.Edge(service=ser)

driver.maximize_window()

driver.get("http://192.168.29.33:5000/")

driver.find_element(By.XPATH, '/html/body/div/form/div[3]/a[2]').click()

driver.find_element(By.ID, 'name').send_keys('RAM')
driver.find_element(By.ID, 'mobile').send_keys('2589745625')
driver.find_element(By.ID, 'age').send_keys('25')
driver.find_element(By.ID, 'destination').send_keys('Mumbai')
driver.find_element(By.ID, 'submit').click()




time.sleep(5)

driver.quit()