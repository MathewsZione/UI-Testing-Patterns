# Use a imagem base do Node.js
FROM node:latest

# Instale as dependências necessárias para o Cypress
RUN apt-get update && \
    apt-get install -y \
    sudo \
    x11vnc \
    xvfb \
    fluxbox \
    wget \
    wmctrl \
    libnss3 \
    libgconf-2-4 \
    libgtk-3-0 \
    libx11-xcb-dev \
    libxcomposite-dev \
    libxcursor-dev \
    libxdamage-dev \
    libxrandr-dev \
    libxss-dev \
    libxtst-dev \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libnspr4 \
    libxss1 \
    libfontconfig1 \
    libfreetype6 \
    libappindicator3-1 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxrandr2 \
    libgdk-pixbuf2.0-0 \
    libpangocairo-1.0-0 \
    libpango-1.0-0 \
    libxcb1 \
    libxkbcommon-x11-0 \
    libxkbcommon0 \
    libgtk-3-0 \
    libatspi2.0-0 \
    libharfbuzz0b \
    libuuid1 \
    xvfb \
    xauth \
    unzip \
    dbus-x11 \
    fonts-liberation \
    libgbm1

# Diretório de trabalho
WORKDIR /docker

# Copiar aplicação e instalar dependências
COPY . /docker
RUN npm install

# Instale o Cypress
RUN npm install -g cypress@9.7.0

# Comando padrão
CMD ["npm", "run", "test:allure"]
