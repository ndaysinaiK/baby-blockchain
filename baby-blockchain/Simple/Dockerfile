FROM golang:latest 

LABEL base.name="Baby blockchain"

WORKDIR /app 

COPY . . 

RUN go build . 

EXPOSE 3002 

ENTRYPOINT [ "./blockchain" ]