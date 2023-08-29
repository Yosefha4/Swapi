# Use the official Python image as the base image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app


RUN pip install --upgrade pip
# Copy the requirements file into the container
COPY requirements.txt /app/

# Install the required packages
RUN pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Start the Flask application
CMD ["python", "app.py"]
